type RandomNumberType = {
    value: number;
};

type PositiveNumber = RandomNumberType & {
    type: 'positive';
};

type NegativeNumber = RandomNumberType & {
    type: 'negative';
};

type ZeroNumber = RandomNumberType & {
    type: 'zero';
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumber = ({ value, type }: RandomNumberProps) => {
    let description = '';

    switch (type) {
        case 'positive':
            description = 'positive';
            break;
        case 'negative':
            description = 'negative';
            break;
        case 'zero':
            description = 'zero';
            break;
    }

    return (
        <div>
            {value} {description}
        </div>
    );
};
