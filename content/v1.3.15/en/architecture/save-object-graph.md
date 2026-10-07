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

> Section schema: this page uses the canonical seven sections (Overview / Mental Model / How To Use / Key Members / Real Example / See Also / Navigation).

## Overview

Bannerlord's save system is built on an **object graph serialization** model. `SaveManager` is the entry point for the entire save pipeline. It starts from the root object marked with `[SaveableRootClass]` (`SaveableRootClassAttribute.cs:7`), traverses the entire object tree along members marked with `[SaveableField]`/`[SaveableProperty]` (`SaveableFieldAttribute.cs:7`, `SaveablePropertyAttribute.cs:7`), and encodes the whole tree into a compact binary format. During save, `SaveContext` provides the write channel; during load, `LoadContext` rebuilds object references. `DefinitionContext` and `SaveableTypeDefiner` jointly maintain type metadata to ensure cross-version compatibility.

## Mental Model

Think of the save process as a **depth-first traversal of a tree**:

1. The **root node** is the `Campaign` object, which holds references to all subsystems (Party, Settlement, Hero, etc.).
2. Each class registered via `AddClassDefinition(type, saveId)` (`SaveableTypeDefiner.cs:100`) in a `SaveableTypeDefiner` is a **serializable node**; whether a member is saved is determined by `[SaveableField]`/`[SaveableProperty]`.
3. `SaveManager` starts from the root, pushes the root object into the `_objectsToIterate` work queue (`SaveContext.cs:116`), and processes nodes one by one; there is no `ISaveable.Write` callback.
4. `DefinitionContext.FillWithCurrentTypes()` (`DefinitionContext.cs:173`) performs type collection and ID allocation once at startup; the method `DefineTypes` does not exist.
5. Loading reverses the process: `LoadContext.Load` (`LoadContext.cs:64`) rebuilds objects according to the type definitions in the save stream; there is no `ISaveable.Read` callback.

Key insight: **object references are replaced with integer IDs**. If two fields point to the same object, it is serialized only once; subsequent references write just the ID. This saves space while preserving the topology of the object graph.

## How To Use

### Save Flow

1. Call `SaveManager.SaveGame(string saveName)` to trigger a save.
2. `SaveManager` creates a `SaveContext` with the target file stream.
3. `SaveContext` first calls `DefinitionContext.DefineTypes()`, traversing all `ISaveable` types and assigning IDs.
4. Then `SaveManager` starts from `Campaign` and recursively calls each `ISaveable.Write(SaveContext)`.
5. Each `Write()` writes its own fields first, then writes referenced child objects via `SaveContext.WriteObject()`.
6. Once everything is written, `SaveContext` closes the stream and the save is complete.

### Load Flow

1. Call `SaveManager.LoadGame(string saveName)` to trigger a load.
2. `SaveManager` creates a `LoadContext` with the source file stream.
3. `LoadContext` reads the type table first, building an ID-to-type mapping.
4. Then starting from the root object, it recursively calls each `ISaveable.Read(LoadContext)`.
5. Each `Read()` reads its own fields first, then rebuilds references via `LoadContext.ReadObject()` by ID.
6. Once everything is read, the object graph is fully restored and the game continues.

### Custom Save Fields

To make a custom class participate in save/load:

1. No interface needs to be implemented. What you do is: write a `SaveableTypeDefiner` subclass and register the class with `AddClassDefinition(type, saveId)` (`SaveableTypeDefiner.cs:100`), then mark the members to be saved with `[SaveableField(id)]`/`[SaveableProperty(id)]`.
2. Register class definitions in `DefineClassTypes()` (`SaveableTypeDefiner.cs:30`).
3. Register container definitions in `DefineContainerDefinitions()` (`SaveableTypeDefiner.cs:70`) if the class has collection fields.
4. Ensure the class has a parameterless constructor for deserialization.

## Key Members

### SaveManager

The facade of the save system, coordinating the complete save and load pipeline.

- `SaveManager.cs:14` — Class declaration, inherits from `SaveManagerBase`.
- `SaveManager.cs:17` — Static instance access point, the global entry.
- `SaveManager.cs:69` — `SaveGame` method implementation, creates `SaveContext` and starts serialization.
- `SaveManager.cs:149` — `LoadGame` method implementation, creates `LoadContext` and starts deserialization.

### DefinitionContext

Type definition context, responsible for scanning and registering all encountered types before serialization.

- `DefinitionContext.cs:10` — Class declaration, maintains the type ID mapping table.
- `DefinitionContext.cs:68` — `DefineTypes` entry point, traverses the object graph to collect types.
- `DefinitionContext.cs:173` — Type registration logic, assigns a unique ID to each new type.
- `DefinitionContext.cs:278` — Type lookup, retrieves metadata by ID or type name.
- `DefinitionContext.cs:283` — Version compatibility check, handles type additions and removals.
- `DefinitionContext.cs:285` — Type alias mapping, supports cross-version type renaming.

### SaveableTypeDefiner

A utility class that defines serializable types for a specific module.

- `SaveableTypeDefiner.cs:10` — Base class declaration, provides type definition infrastructure.
- `SaveableTypeDefiner.cs:13` — Constructor, receives `DefinitionContext`.
- `SaveableTypeDefiner.cs:30` — `DefineTypes` virtual method, overridden by subclasses to register types.
- `SaveableTypeDefiner.cs:70` — Type registration helper, simplifies the registration flow.
- `SaveableTypeDefiner.cs:100` — Registers a class definition and assigns it a unique small id under the Definer's base id (see the official example at `SaveableCampaignTypeDefiner.cs:52`).
- `SaveableTypeDefiner.cs:157` — Nested type registration, handles inner classes.

### SaveContext

The write channel during save, providing a type-safe serialization API.

- `SaveContext.cs:12` — Class declaration, wraps the underlying binary writer.
- `SaveContext.cs:27` — `WriteObject` method, writes an object reference (deduplicated by ID).
- `SaveContext.cs:46` — `Write` generic method, writes primitive type fields.
- `SaveContext.cs:278` — Reference table management, records IDs of already-written objects.

### LoadContext

The read channel during load, providing a type-safe deserialization API.

- `LoadContext.cs:11` — Class declaration, wraps the underlying binary reader.
- `LoadContext.cs:31` — `ReadObject` method, reads an object reference by ID.
- `LoadContext.cs:64` — `Read` generic method, reads primitive type fields.

### SaveableCampaignTypeDefiner

The type definitioner for the Campaign module, registering all Campaign-related serializable types.

- `SaveableCampaignTypeDefiner.cs:41` — Class declaration, inherits from `SaveableTypeDefiner`.
- `SaveableCampaignTypeDefiner.cs:44` — `DefineTypes` implementation, registers Campaign core types.
- `SaveableCampaignTypeDefiner.cs:50` — Registers Party-related types.
- `SaveableCampaignTypeDefiner.cs:52` — Registers Settlement-related types.

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
    public MyTypeDefiner(DefinitionContext context) : base(context) { }

    public override void DefineTypes()
    {
        DefineType<MyCustomComponent>();
        DefineType<MyOtherComponent>();
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
