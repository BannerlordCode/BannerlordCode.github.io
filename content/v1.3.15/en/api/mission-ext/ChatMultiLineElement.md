---
title: "ChatMultiLineElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatMultiLineElement`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChatMultiLineElement

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatMultiLineElement`
**Area:** mission-ext

## Overview

`ChatMultiLineElement` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget { get; set; }` |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget { get; set; }` |
| `ChatLine` | `public string ChatLine { get; set; }` |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget { get; set; }` |

## Usage Example

```csharp
var value = new ChatMultiLineElement();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
