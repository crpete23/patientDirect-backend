const cpTemp = {
  cc: 'chest pain',
  template: {
    'quality': {
      type: 'radio',
      choices: [
        'sharp', 'dull', 'pressure', 'ache'
      ],
      label: `What quality best describes your chest pain?`,
      other: true
    },
    'timing': {
      type: 'radio',
      choices: [
        'constant', 'intermittent', 'waxing and waning'
      ],
      label: `What is the frequency/ timing of your chest pain?`,
      other: true
    },
    'severity': {
      type: 'radio',
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      label: `What is the severity of your chest pain?`,
      other: false
    },
    'duration': {
      type: 'radio',
      choices: [
        'less than a minute',
        'several minutes',
        'one hour',
        'several hours',
        'one day',
        'several days',
        'several weeks',
        'several months'
      ],
      label: 'When symptoms are present, how long do they usually last?',
      other: true
    },
    'location': {
      type: 'radio',
      choices: [
        'central chest', 'left chest', 'right chest', 'left shoulder/arm', 'right shoulder/arm'
      ],
      label: `What is the location of your chest pain?`,
      other: true
    },
    "alleviating factors": {
      type: 'check',
      choices: [
        'nitroglycerin', 'rest', 'stretching or massaging the area', 'exertion', 'pain medications'
      ],
      label: 'What, if anything, makes your symptoms better? (select all that apply)'
    },
    "exacerbating factors": {
      type: 'check',
      choices: [
        'movement', 'exertion', 'deep breathing', 'eating/drinking'
      ],
      label: 'What, if anything, induces or makes your symptoms worse? (select all that apply)'
    },
    "associated symptoms": {
      type: 'check',
      choices: [
        'shortness of breath',
        'diaphoresis (sweating)',
        'nausea',
        'vomitting',
        'fatigue',
        'dizziness/light headedness'
      ],
      label: `Have you experienced any other symptoms that you feel are related to your chest pain? (select all that apply)`
    },
    "context": {
      type: 'write',
      label: `Briefly describe the context of your chest pain`
    }
  }
}

const sobTemp = {
  cc: 'shortness of breath',
  template: {
    "quality": {
      type: 'radio',
      choices: [
        'shallow', 'difficulty taking a deep breath'
      ],
      label: `What quality best describes your shortness of breath?`,
      other: true
    },
    "timing": {
      type: 'radio',
      choices: [
        'constant', 'intermittent', 'waxing and waning'
      ],
      label: `What is the frequency/ timing of your shortness of breath?`,
      other: true
    },
    "severity": {
      type: 'radio',
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      label: `What is the severity of your shortness of breath?`,
      other: false
    },
    "duration": {
      type: 'radio',
      choices: [
        'less than a minute',
        'several minutes',
        'one hour',
        'several hours',
        'one day',
        'several days',
        'several weeks',
        'several months'
      ],
      label: 'When symptoms are present, how long do they usually last?',
      other: true
    },
    "alleviating factors": {
      type: 'check',
      choices: [
        'inhalers', 'resting', 'sitting up', 'nitrates', 'diuretics'
      ],
      label: 'What, if anything, makes your symptoms better? (select all that apply)'
    },
    "exacerbating factors": {
      type: 'check',
      choices: [
        'exertion', 'walking up incline', 'laying down', 'bending over', 'salt indiscretions'
      ],
      label: 'What, if anything, induces or makes your symptoms worse? (select all that apply)'
    },
    "associated symptoms": {
      type: 'check',
      choices: [
        'chest pain',
        'leg edema',
        'weight gain',
        'orthopnea/PND',
        'fatigue',
        'dizziness/light headedness'
      ],
      label: `Have you experienced any other symptoms that you feel are related to your shortness of breath? (select all that apply)`
    },
    "context": {
      type: 'write',
      label: `Briefly describe the context of your shortness of breath`
    }
  }
}

const palpTemp = {
  cc: 'palpitations',
  template: {
    "quality": {
      type: 'radio',
      choices: [
        'hard/pounding', 'fast/racing', 'skipped beats', 'slow'
      ],
      label: `What quality best describes your palpitations?`,
      other: true
    },
    "timing": {
      type: 'radio',
      choices: [
        'constant', 'intermittent', 'waxing and waning'
      ],
      label: `What is the frequency/ timing of your palpitations?`,
      other: true
    },
    "severity": {
      type: 'radio',
      choices: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      label: `What is the severity of your palpitations?`,
      other: false
    },
    "duration": {
      type: 'radio',
      choices: [
        'less than a minute',
        'several minutes',
        'one hour',
        'several hours',
        'one day',
        'several days',
        'several weeks',
        'several months'
      ],
      label: 'When symptoms are present, how long do they usually last?',
      other: true
    },
    "location": {
      type: 'radio',
      choices: [
        'chest', 'throat/neck'
      ],
      label: `What is the location of your palpitations?`,
      other: true
    },
    "alleviating factors": {
      type: 'check',
      choices: [
        'time', 'rest', 'anti-anxiety medication', 'beta-blockers', 'pill in the pocket (antiarrhythmic medication)'
      ],
      label: 'What, if anything, makes your symptoms better? (select all that apply)'
    },
    "exacerbating factors": {
      type: 'check',
      choices: [
        'anxiety', 'exertion', 'over-eating', 'alcohol intake', 'caffeine'
      ],
      label: 'What, if anything, induces or makes your symptoms worse? (select all that apply)'
    },
    "associated symptoms": {
      type: 'check',
      choices: [
        'shortness of breath',
        'chest pain',
        'diaphoresis (sweating)',
        'nausea',
        'vomitting',
        'fatigue',
        'dizziness/light headedness',
        'syncope'
      ],
      label: `Have you experienced any other symptoms that you feel are related to your palpitations? (select all that apply)`
    },
    "context": {
      type: 'write',
      label: `Briefly describe the context of your palpitations`
    }
  }
}

const rosTemp = {
  template: {
    Constitutional: {
      "fatigue": false,
      "fever": false,
      "unintentional weight loss": false
    },
    Eyes: {
      "eye pain": false,
      "blurry vision": false
    },
    ENT: {
      "sore throat": false,
      "epistaxis": false
    },
    Cardiovascular: {
      "chest pain": false,
      "palpitations": false,
      "dyspnea": false
    },
    Respiratory: {
      "shortness of breath": false,
      "cough": false
    },
    Gastrointestinal: {
      "abdominal pain": false,
      "nausea": false,
      "vomiting": false,
      "hematochezia": false,
      "melena": false
    },
    Genitourinary: {
      "hematuria": false
    },
    Musculoskeletal: {
      "myalgias": false,
      "joint pain": false
    },
    Neurological: {
      "history of CVA": false,
      "history of TIA": false,
      "headache": false,
      "lightheadedness": false,
      "syncope": false
    },
    Endocrine: {
      "diabetes": false
    },
    Hematologic: {
      "anticoagulant use": false
    }
  }
}

module.exports = {
  cpTemp,
  sobTemp,
  palpTemp,
  rosTemp
}
