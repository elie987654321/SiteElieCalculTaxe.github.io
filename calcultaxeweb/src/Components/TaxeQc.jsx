import { Component } from "react";
import  MontantAvecTaxes from "../FichierJs/MontantAvecTaxes"


class TaxeQc extends Component
{
    state = {
        montant : 0
    }

    changementAnnee(e)
    {
        let newMontant = new MontantAvecTaxes(this.state.montant.montantSansTaxes, e.target.value);
        this.setState({montant : newMontant});
    }

    changementMontant(e)
    {
        if(e.target.value !== undefined)
        {
            let newMontant = new MontantAvecTaxes(e.target.value, this.state.montant.annee);        
            this.setState({montant : newMontant});
        }
    }

    constructor(props) {
        super(props);
        let montantAvecTaxes =  new MontantAvecTaxes(0,2023);
        this.setState({montant : montantAvecTaxes}) 
        this.changementAnnee = this.changementAnnee.bind(this);
        this.changementMontant = this.changementMontant.bind(this);
    }
    

    render()
    {
        return (
            <div>
                <label for="select">Choisissez l'année du calcul</label>
                <select name="select" onChange={this.changementAnnee}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>    
                </select>
                <label for="select"></label>
                <input type="number" defaultValue="0" name="montantSantTaxe" onChange={ this.changementMontant}/>
                <label for="TPS">TPS</label>
                <input type="text" name="TPS" readonly value={this.state.montant.tps}></input>
                <label for="TVQ">TVQ</label>
                <input type="text" for="TVQ" readonly value={this.state.montant.tvq}/>
                <label for="totalAvecTaxes">Total avec taxes</label>
                <input type="text" name="totalAvecTaxes" readonly value={this.state.montant.MontantAvecTaxes}/>
            </div>
        )
    }
}

export default TaxeQc