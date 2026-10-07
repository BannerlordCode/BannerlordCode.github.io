---
title: "Save Object Graph"
description: "Bannerlord save system's object graph serialization architecture: how SaveManager traverses the game object tree and writes a binary stream."
---

# Save Object Graph

**Namespace:** `TaleWorlds.SaveSystem` · `TaleWorlds.SaveSystem.Definition` · `TaleWorlds.SaveSystem.Save` · `TaleWorlds.SaveSystem.Load`  
**Module:** `TaleWorlds.SaveSystem` · `TaleWorlds.CampaignSystem`  
**Type:** Architecture topic page — spanning `SaveManager` / `DefinitionContext` / `SaveableTypeDefiner` / `SaveContext` / `LoadContext`  
**Source files:** `TaleWorlds.SaveSystem/SaveManager.cs` · `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs` · `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs` · `TaleWorlds.SaveSystem/Save/SaveContext.cs` · `TaleWorlds.SaveSystem/Load/LoadContext.cs` · `TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs`  
**Line-number basis:** every `X.cs:N` on this page refers to the **v1.3.15** source tree (`bannerlord-1.3.15/`).

> Section schema: this page uses the canonical seven sections (Overview / Mental Model / How To Use / Key Members / Real Examples / See Also / Navigation).

## Overview

Bannerlord's save system is built on an **object graph serialization** model. `SaveManager` is the entry point for the entire save pipeline. It starts from the root object marked with `[SaveableRootClass]` (`SaveableRootClassAttribute.cs:7`), traverses the entire object tree along members marked with `[SaveableField]`/`[SaveableProperty]` (`SaveableFieldAttribute.cs:7`, `SaveablePropertyAttribute.cs:7`), and encodes the whole tree into a compact binary format. During save, `SaveContext` provides the write channel; during load, `LoadContext` rebuilds object references. `DefinitionContext` and `SaveableTypeDefiner` jointly maintain type metadata to ensure cross-version compatibility.

## Mental Model

Think of the save process as a **depth-first traversal of a tree**:

1. The **root node** is the `Campaign` object, which holds references to all subsystems (Party, Settlement, Hero, etc.).
2. Each class registered via `AddClassDefinition(type, saveId)` (`SaveableTypeDefiner.cs:100`) in a `SaveableTypeDefiner` is a **serializable node**; whether a member is saved is determined by `[SaveableField]`/`[SaveableProperty]`.
3. `SaveManager` starts from the root, pushes the root object into the `_objectsToIterate` work queue (`SaveContext.cs:116`), and processes nodes one by one; there is no per-object Write callback.
4. `DefinitionContext.FillWithCurrentTypes()` (`DefinitionContext.cs:173`) performs type collection and ID allocation once at startup; the method `DefineTypes` does not exist.
5. Loading reverses the process: `LoadContext.Load` (`LoadContext.cs:64`) rebuilds objects according to the type definitions in the save stream; there is no per-object Read callback.

Key insight: **object references are replaced with integer IDs**. If two fields point to the same object, it is serialized only once; subsequent references write just the ID. This saves space while preserving the topology of the object graph.

## How To Use

### Save Flow

1. Call `SaveManager.Save(object target, MetaData metaData, string saveName, ISaveDriver driver)` (`SaveManager.cs:69`) to trigger a save; `target` is the root of the object graph.
2. `SaveManager` creates a `SaveContext` with the target file stream.
3. `DefinitionContext.FillWithCurrentTypes()` (`DefinitionContext.cs:173`) performs type collection and ID allocation once at startup.
4. `SaveContext` records the root (`this.RootObject = target;`, `SaveContext.cs:289`) and pushes it into the `_objectsToIterate` work queue (`SaveContext.cs:116`), then processes nodes one by one.
5. Each node's members are written according to its registered definition; references are deduplicated by object id, so a shared object is serialized once.
6. Once everything is written, `SaveContext` closes the stream and the save is complete.

### Load Flow

1. Call `SaveManager.Load(string saveName, ISaveDriver driver)` (`SaveManager.cs:149`) to trigger a load; for late initialization use `SaveManager.Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)` (`SaveManager.cs:155`).
2. `SaveManager` creates a `LoadContext` with the source file stream.
3. `LoadContext` reads the type table first, building an ID-to-type mapping.
4. `LoadContext.Load` (`LoadContext.cs:64`) rebuilds objects according to the type definitions in the save stream.
5. Objects are rebuilt from the type definitions in the save stream by `LoadContext.Load(LoadData loadData, bool loadAsLateInitialize)` (`LoadContext.cs:64`). **There is no per-object `ReadObject` callback.**
6. Once everything is read, the object graph is fully restored and the game continues.

### Custom Save Fields

To make a custom class participate in save/load:

1. No interface needs to be implemented. What you do is: write a `SaveableTypeDefiner` subclass and register the class with `AddClassDefinition(type, saveId)` (`SaveableTypeDefiner.cs:100`), then mark the members to be saved with `[SaveableField(id)]`/`[SaveableProperty(id)]`.
2. Register class definitions in `DefineClassTypes()` (`SaveableTypeDefiner.cs:30`).
3. Register container definitions in `DefineContainerDefinitions()` (`SaveableTypeDefiner.cs:70`) if the class has collection fields.
4. Ensure the class has a parameterless constructor for deserialization.

## Key Members

### SaveManager

The facade of the save system.

- `SaveManager.cs:14` — `public static class SaveManager`: the entry class of the save system. **It is a static class, with no base class and no `Instance` property.**
- `SaveManager.cs:17` — `public static void InitializeGlobalDefinitionContext()`: initializes `DefinitionContext` once at startup and calls `FillWithCurrentTypes()`.
- `SaveManager.cs:69` — `public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`: the save entry point.
- `SaveManager.cs:149` — `public static LoadResult Load(string saveName, ISaveDriver driver)`: the load entry point.

### DefinitionContext

The type definition center, maintaining the "type → definition" mapping.

- `DefinitionContext.cs:10` — `public class DefinitionContext`: the definition context body.
- `DefinitionContext.cs:68` — `internal void AddClassDefinition(TypeDefinition classDefinition)`: registers a type definition into the context.
- `DefinitionContext.cs:173` — `public void FillWithCurrentTypes()`: scans assemblies at startup and collects all type definitions.
- `DefinitionContext.cs:279` — `private void CollectTypes(Assembly assembly)`: performs reflection collection on a single assembly.
- `DefinitionContext.cs:283` — `if (typeof(SaveableTypeDefiner).IsAssignableFrom(type) && !type.IsAbstract)`: filters out non-abstract `SaveableTypeDefiner` subclasses.
- `DefinitionContext.cs:285` — `SaveableTypeDefiner saveableTypeDefiner = (SaveableTypeDefiner)Activator.CreateInstance(type);`: reflectively instantiates the Definer — **this is why you "do not need and cannot manually Register"**.

### SaveableTypeDefiner

The base class for defining serializable types for a module.

- `SaveableTypeDefiner.cs:10` — `public abstract class SaveableTypeDefiner`: base class declaration.
- `SaveableTypeDefiner.cs:13` — `protected SaveableTypeDefiner(int saveBaseId)`: constructor receives only the **base id** (not `DefinitionContext`).
- `SaveableTypeDefiner.cs:30` — `protected internal virtual void DefineClassTypes()`: override it to register classes.
- `SaveableTypeDefiner.cs:70` — `protected internal virtual void DefineContainerDefinitions()`: override it to register container types.
- `SaveableTypeDefiner.cs:100` — `protected void AddClassDefinition(Type type, int saveId, IObjectResolver resolver = null)`: registers a class definition and assigns a small id.
- `SaveableTypeDefiner.cs:157` — `protected void ConstructContainerDefinition(Type type)`: constructs a definition for a container type.

### SaveContext

The write context during save.

- `SaveContext.cs:12` — `public class SaveContext : ISaveContext`: class declaration.
- `SaveContext.cs:27` — `public DefinitionContext DefinitionContext { get; private set; }`: the context used to look up type definitions while saving.
- `SaveContext.cs:46` — `public SaveContext(DefinitionContext definitionContext)`: constructor.
- `SaveContext.cs:278` — `public bool Save(object target, MetaData metaData, out string errorMessage)`: performs the actual write.

### LoadContext

The read context during load.

- `LoadContext.cs:11` — `public class LoadContext`: class declaration.
- `LoadContext.cs:31` — `public DefinitionContext DefinitionContext { get; private set; }`: the context used to look up type definitions while loading.
- `LoadContext.cs:64` — `public bool Load(LoadData loadData, bool loadAsLateInitialize)`: performs the actual read.

### SaveableCampaignTypeDefiner

The type definitioner for the Campaign module.

- `SaveableCampaignTypeDefiner.cs:41` — `public class SaveableCampaignTypeDefiner : SaveableTypeDefiner`: class declaration.
- `SaveableCampaignTypeDefiner.cs:44` — `public SaveableCampaignTypeDefiner()`: parameterless constructor, base id passed in `base(...)`.
- `SaveableCampaignTypeDefiner.cs:50` — `protected override void DefineClassTypes()`: registers all Campaign saveable classes.
- `SaveableCampaignTypeDefiner.cs:52` — `base.AddClassDefinition(typeof(Army), 3, null);`: the first line of the official example, registering `Army`.

## Real Examples

### Example 1: Saving a Custom Component

```csharp
// 1. Define the class, mark members to save with [SaveableField]/[SaveableProperty]
public class MyCustomComponent
{
    [SaveableField(1)]
    private int _value;

    [SaveableProperty(2)]
    public Hero Owner { get; private set; }
}

// 2. Write a Definer subclass, register with AddClassDefinition
public class MyTypeDefiner : SaveableTypeDefiner
{
    public MyTypeDefiner() : base(1001) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(MyCustomComponent), 1);
    }
}
```

### Example 2: Understanding Reference Deduplication

```csharp
// Suppose hero1 and hero2 reference the same Party object
var party = new Party();
hero1.Party = party;
hero2.Party = party;

// During save, Party is serialized only once
// On subsequent encounters, only the assigned ID is written
```

### Example 3: Type Definition Flow

```csharp
// Example SaveableTypeDefiner subclass
public class MyTypeDefiner : SaveableTypeDefiner
{
    // The base constructor is protected SaveableTypeDefiner(int saveBaseId) (SaveableTypeDefiner.cs:13)
    // ⇒ it takes a base id, not a DefinitionContext
    public MyTypeDefiner() : base(1001) { }

    protected override void DefineClassTypes()
    {
        base.AddClassDefinition(typeof(MyCustomComponent), 1);
        base.AddClassDefinition(typeof(MyOtherComponent), 2);
    }
}
```

## See Also

- [Save System](../save-system)
- [GameModel Decorator Pattern](../gamemodel-decorator)
- [Action Family](../action-family)
- [SaveManager class page](../../api/save-system/SaveManager)
- [SaveContext class page](../../api/save-system/SaveContext)
- [LoadContext class page](../../api/save-system/LoadContext)
- [DefinitionContext class page](../../api/save-system/DefinitionContext)
- [SaveableTypeDefiner class page](../../api/save-system/SaveableTypeDefiner)
- [SaveableCampaignTypeDefiner class page](../../api/campaign-ext/SaveableCampaignTypeDefiner)

## Navigation

- ↑ Parent: [..](../)
- ↔ Sibling: [UI Three Layers](../ui-three-layers) | [Action Family](../action-family) | [GameModel Decorator Pattern](../gamemodel-decorator)
- Related class pages: [SaveManager](../../api/save-system/SaveManager) | [SaveableCampaignTypeDefiner](../../api/campaign-ext/SaveableCampaignTypeDefiner)
