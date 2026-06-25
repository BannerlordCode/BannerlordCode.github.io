---
title: "SetChatFilterListsMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetChatFilterListsMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetChatFilterListsMessage

**Namespace:** Messages.FromCustomBattleServerManager.ToCustomBattleServer
**Module:** Messages.FromCustomBattleServerManager
**Type:** `public class SetChatFilterListsMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServerManager.ToCustomBattleServer/SetChatFilterListsMessage.cs`

## Overview

`SetChatFilterListsMessage` lives in `Messages.FromCustomBattleServerManager.ToCustomBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServerManager.ToCustomBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProfanityList` | `public string ProfanityList { get; }` |
| `AllowList` | `public string AllowList { get; }` |

## Usage Example

```csharp
var example = new SetChatFilterListsMessage();
```

## See Also

- [Complete Class Catalog](../catalog)