angular.module('starter.services', [])
    .factory('projectService', function () {

        var allProjects = {
            "projects": [
                {
                    "id": 111,
                    "name": "Project 1",
                    "organizations": [
                        {
                            "id": 1111,
                            "name": "Project 1 Organization 1",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 1 Organization 1 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 1 Organization 1 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 1 Organization 1 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 1112,
                            "name": "Project 1 Organization 2",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 1 Organization 2 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 1 Organization 2 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 1 Organization 2 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 1113,
                            "name": "Project 1 Organization 3",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 1 Organization 3 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 1 Organization 3 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 1 Organization 3 Contact 3"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 222,
                    "name": "Project 2",
                    "organizations": [
                        {
                            "id": 2221,
                            "name": "Project 2 Organization 1",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 2 Organization 1 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 2 Organization 1 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 2 Organization 1 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 2222,
                            "name": "Project 2 Organization 2",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 2 Organization 2 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 2 Organization 2 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 2 Organization 2 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 2223,
                            "name": "Project 2 Organization 3",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 2 Organization 3 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 2 Organization 3 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 2 Organization 3 Contact 3"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 333,
                    "name": "Project 3",
                    "organizations": [
                        {
                            "id": 3331,
                            "name": "Project 3 Organization 1",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 3 Organization 1 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 3 Organization 1 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 3 Organization 1 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 3332,
                            "name": "Project 3 Organization 2",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 3 Organization 2 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 3 Organization 2 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 3 Organization 2 Contact 3"
                                }
                            ]
                        },
                        {
                            "id": 3333,
                            "name": "Project 3 Organization 3",
                            "contacts": [
                                {
                                    "id": 755,
                                    "name": "Project 3 Organization 3 Contact 1"
                                },
                                {
                                    "id": 756,
                                    "name": "Project 3 Organization 3 Contact 2"
                                },
                                {
                                    "id": 757,
                                    "name": "Project 3 Organization 3 Contact 3"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        return {
            all: allProjects
        }
    })
    .factory('RequestService', function () {
        var service = {
            signin: function () {
            }
        }
        return service;
    });

