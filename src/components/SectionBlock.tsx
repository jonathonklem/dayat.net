import * as React from "react"

interface SectionBlockProps {
    heading?: string;
    body: any;
    rowNum: number;
}

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
    return (
        <section className={(props.rowNum%2) ? "mt-12" : "mt-12  bg-alt text-white pb-12"}>
            <div className="px-12 max-w-4xl mx-auto">
                { props.heading && (
                    <h2 className="text-3xl tracking-widest pt-12">{props.heading}</h2>
                )}
                <p className={(props.rowNum%2) ? "tracking-wider mt-8 text-lg leading-loose" : "tracking-wider mt-8 text-lg leading-loose text-white"}>{props.body}</p>
            </div>
        </section>
    ); 
}

export default SectionBlock