export function createCourse(course) {
    return { type: 'CREATE_COURSE', course};
}

export function deleteCourse(index) {
    return { type: 'DELETE_COURSE', index};
}

