import { useState } from "react"
import Card from "../components/Card";
import Button from "../components/Button";

import { PencilSparklesIcon, Import, LifeBuoy } from "lucide-react";
import Input from "../components/Input";

function Home() {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        id: '',
        lable: '',
        des: '',
        cat: 'new'
    })

    const [tasks, settasks] = useState([{
        id: 1,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'new'
    },
    {
        id: 2,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'new'
    }, {
        id: 3,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'imp'
    }, {
        id: 4,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'imp'
    }, {
        id: 5,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'new'
    },
    {
        id: 6,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'life'
    }, {
        id: 7,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'imp'
    }, {
        id: 8,
        lable: 'sadfasd',
        des: 'fdfdsdfs',
        cat: 'life'
    }]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSub = () => {
        settasks((prev) => ([...prev, { ...form, id: Date.now }]))
    }

    return (
        <>
            <Button size="sm" onClick={() => setOpen(!open)}><p>Add task</p></Button>
            <section className="grid grid-cols-4 gap-3 p-4 ">
                {tasks.map((task) => (
                    <Card key={task.id}>
                        <Card.Icon>{task.cat === 'new' ?
                            <PencilSparklesIcon size={24} color="blue" />
                            : task.cat === 'imp' ?
                                <Import size={24} color="red" />
                                : <LifeBuoy size={24} color="green" />}</Card.Icon>
                        <Card.Lable lable={task.lable} />
                        <Card.Des des={task.des} />
                        <Card.Actions>
                            <Button size="sm" varient="primary">View</Button>
                            <Button size="sm" varient="accent">Edit</Button>
                        </Card.Actions>
                    </Card>
                ))}
            </section>

            {open && <section className="grid grid-cols-4 gap-3 p-4 ">
                <form onSubmit={handleSub}>
                    <Input id="lable" name="lable" value={form.lable} onChange={handleChange}><p>Lable</p></Input>
                    <Input id="des" name="des" value={form.des} onChange={handleChange}><p>Descriptions</p></Input>
                    <Button type="submit"><p>Add</p></Button>
                </form>

            </section>}
        </>
    )
}

export default Home
