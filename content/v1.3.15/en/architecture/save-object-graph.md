---
title: "Save Object Graph"
description: "How SaveableTypeDefiner / SaveContext / LoadContext / DefinitionContext collaborate, and how custom classes enter the save graph"
---

## One-Line Summary

The save system serializes all persistent game objects into a save file via a "define → save → load" three-step pipeline; for a mod to bring a custom class into the save graph, it must provide a `SaveableTypeDefiner` subclass for that class.

## Mental Model

The save system revolves around four collaborating classes:

1. **SaveableTypeDefiner** — defines "how to serialize a custom class". It tells the save system which fields of the class to persist, what type each field is, and how to read/write it. Every saveable custom class needs a corresponding Definer.
2. **SaveContext** — the context during saving. It holds the output save stream and provides `Write` methods that serialize each node in the object graph according to the Definer's definition.
3. **LoadContext** — the context during loading. It holds the input save stream and provides `Read` methods that restore data into objects according to the Definer's definition.
4. **DefinitionContext** — the definition registry. It maintains the "type → Definer" mapping, used by both save and load to locate the Definer for a given type.

The full path of a custom class entering the save graph:

```
Define phase: at mod startup, register a SaveableTypeDefiner subclass with DefinitionContext
    ↓
Save phase: game triggers save → SaveContext traverses object graph → encounters custom class → looks up DefinitionContext for Definer → writes fields per Definer definition
    ↓
Load phase: game loads save → LoadContext traverses save stream → encounters custom class marker → looks up DefinitionContext for Definer → reads fields per Definer definition → restores object
```

**Why mods care**: if your mod adds a new saveable class (e.g. a custom `Hero` extension or custom `Quest` data) without registering a Definer, the class is silently dropped during save and the data is lost after loading.

## Real Minimal Example

```csharp
// 1. Define a saveable mod class
public class MyModData
{
    public string Name;
    public int Value;
}

// 2. Write a Definer for it
public class MyModDataDefiner : SaveableTypeDefiner
{
    public MyModDataDefiner() : base(1001) { } // unique ID

    protected override void DefineClassTypes()
    {
        AddClassDefinition(typeof(MyModData), 1);
    }

    protected override void DefineContainerDefinitions()
    {
        // empty when there are no container fields
    }

    protected override string GetContainerName()
    {
        return "MyModData";
    }
}

// 3. Register it during mod initialization
public override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    new MyModDataDefiner().Register();
}
```

### Key Source Locations

| Symbol | file:line | Actual content at that line |
|--------|-----------|----------------------------|
| SaveableTypeDefiner class declaration | `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs:10` | `public abstract class SaveableTypeDefiner` |
| SaveContext class declaration | `TaleWorlds.SaveSystem/Save/SaveContext.cs:12` | `public class SaveContext : ISaveContext` |
| LoadContext class declaration | `TaleWorlds.SaveSystem/Load/LoadContext.cs:11` | `public class LoadContext` |

## Common Misuses

1. **Forgetting to register the Definer**: you wrote a `SaveableTypeDefiner` subclass but never called `Register()` during mod init, so the save system cannot find the definition and the custom class is silently dropped.
2. **Definer ID collision**: two different Definers use the same base ID (e.g. `base(1001)`), causing undefined behavior — possible overwrite or crash.
3. **Field type mismatch**: the field type declared in `DefineClassTypes` does not match the actual class, so saved data and loaded data are misaligned, leading to load crashes or corrupted data.
4. **Missing container definitions**: if the custom class has `List<T>` or `Dictionary<K,V>` fields, they must be declared in `DefineContainerDefinitions`, otherwise those collection fields are not saved.

## Navigation

- ↑ Parent: [..](../)
- ↔ Sibling: [GameModel Decorator](../gamemodel-decorator) | [Mission Lifecycle](../mission-lifecycle) | [UI Three Layers](../ui-three-layers)
- Related class page: `SaveableTypeDefiner` (code snippet; links handled by later pass)

## Section Schema Declaration

This page uses the architecture hub form: One-Line Summary = overview; Mental Model = mental model; Real Minimal Example = how to use + real example; Common Misuses = mental model expansion; Navigation = see also.
