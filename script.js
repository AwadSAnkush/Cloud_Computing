function loadProviders() {
    const providers = [
        { name: "Amazon Web Services (AWS)", description: "AWS is the most widely adopted cloud platform, offering over 200 services worldwide." },
        { name: "Microsoft Azure", description: "Azure provides an extensive range of cloud services, designed to build, manage, and deploy applications." },
        { name: "Google Cloud", description: "Google Cloud offers services including data analytics, machine learning, and storage." },
        { name: "IBM Cloud", description: "IBM Cloud includes infrastructure, AI, and blockchain solutions for enterprises." },
        { name: "Oracle Cloud", description: "Oracle Cloud specializes in database services, enterprise software, and cloud infrastructure." }
    ];

    let providerList = document.getElementById('provider-list');
    providerList.innerHTML = '';

    providers.forEach(provider => {
        let providerDiv = document.createElement('div');
        providerDiv.classList.add('provider');

        let providerName = document.createElement('h3');
        providerName.textContent = provider.name;

        let providerDesc = document.createElement('p');
        providerDesc.textContent = provider.description;

        providerDiv.appendChild(providerName);
        providerDiv.appendChild(providerDesc);

        providerList.appendChild(providerDiv);
    });
}
