---
title: "NativeScriptComponent"
description: "Auto-generated class reference for NativeScriptComponent."
---
# NativeScriptComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class NativeScriptComponent : ScriptComponent`
**Base:** `ScriptComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/NativeScriptComponent.cs`

## Overview

`NativeScriptComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `NativeScriptComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var component = agent.GetComponent<NativeScriptComponent>();
```

## See Also

- [Area Index](../)