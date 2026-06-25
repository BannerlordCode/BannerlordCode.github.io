---
title: "MultiplayerVoiceChatVM"
description: "Auto-generated class reference for MultiplayerVoiceChatVM."
---
# MultiplayerVoiceChatVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerVoiceChatVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerVoiceChatVM.cs`

## Overview

`MultiplayerVoiceChatVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActiveVoicePlayers` | `public MBBindingList<MPVoicePlayerVM> ActiveVoicePlayers { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MultiplayerVoiceChatVM from the subsystem API first
MultiplayerVoiceChatVM multiplayerVoiceChatVM = ...;
multiplayerVoiceChatVM.OnFinalize();
```

### OnTick
`public void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MultiplayerVoiceChatVM from the subsystem API first
MultiplayerVoiceChatVM multiplayerVoiceChatVM = ...;
multiplayerVoiceChatVM.OnTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerVoiceChatVM multiplayerVoiceChatVM = ...;
multiplayerVoiceChatVM.OnFinalize();
```

## See Also

- [Area Index](../)