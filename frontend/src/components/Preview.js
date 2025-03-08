import React, { useState } from 'react';
import Visualization from './Visualization';
import axios from 'axios';

const Preview = () => {
    const [features, setfeatures] = useState(Array(11).fill(''))
    const [loading, setLoading] = useState(false);
    const [prediction, setPrediction] = useState(null);

    const handleChange = (index, value) => {
        const updatedFeatures = [...features];
        updatedFeatures[index] = value;
        setfeatures(updatedFeatures);
    };

    const handleSubmit = () => {
        if (features.includes("")) {
            alert("Please fill all the fields");
            return;
        }
    
        setLoading(true);

        axios.post('http://localhost:8000/api/predict', { features })
             .then(response => {
                setPrediction(response.data.prediction);
                setLoading(false);
             })
             .catch(error => {
                console.error("Error:", error);
                setLoading(false);
             });
    };

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>
                Preview
            </h2>
            <div className='row'>
                {features.map((feature, index) => (
                    <div className='col-md-2 mb-3' key={index}>
                        <input 
                            type='number'
                            className='form-control'
                            placeholder={`Feature ${index + 1}`}
                            value={feature}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Loading...' : 'Predict'}
                </button>
            </div>

            {prediction !== null && <Visualization />}
        </div>
    );  
};

export default Preview;