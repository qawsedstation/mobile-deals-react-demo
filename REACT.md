
# REACT GUIDELINES

## UI modules

UI modules are stored within app/components/{modules,pages,root}/{modulename}

### UI module structure:
* index.js - jsx component,
* spec.js - unit tests with enzyme,
* story.js - react storybook,
* styles.js - style module,

### JSX module
* try giving your component a unique name, instead of 'Component' provide a name that will be representative of the responsibility delegated to the component, eg: BundleColumn,
* component should import its styles.js module only,

### Unit tests
* write visual storybook tests first, after that think about assertions which can be automated,

### Storybook
* start with 'default view', render the component passing minimum properties,


### styles
* styles.js handles all global style imports
