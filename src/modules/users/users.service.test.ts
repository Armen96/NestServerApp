import * as users_service from "./users.service"

// @ponicode
describe("findAll", () => {
    let inst: any

    beforeEach(() => {
        inst = new users_service.UsersService(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.findAll()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("findOne", () => {
    let inst: any

    beforeEach(() => {
        inst = new users_service.UsersService(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.findOne("7289708e-b17a-477c-8a77-9ab575c4b4d8")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.findOne("a85a8e6b-348b-4011-a1ec-1e78e9620782")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.findOne("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.findOne("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("remove", () => {
    let inst: any

    beforeEach(() => {
        inst = new users_service.UsersService(undefined)
    })

    test("0", async () => {
        await inst.remove("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("1", async () => {
        await inst.remove("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("2", async () => {
        await inst.remove("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("3", async () => {
        await inst.remove("")
    })
})

// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new users_service.UsersService(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.create(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.create("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.create(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.create(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.create("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.create(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
