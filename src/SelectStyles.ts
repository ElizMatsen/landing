export const selectStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        cursor: 'pointer',
        background: 'rgba(61, 64, 80, 0.85)',
        display: 'flex',
        color: state.isFocused ? '#42A9ED' : '#FFFFFF',
    }),
}
