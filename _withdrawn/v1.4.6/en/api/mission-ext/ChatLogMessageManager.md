---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MessageManagerBase; 8 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChatLogMessageManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ChatLogMessageManager lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs. It is a public class, implementing/inheriting MessageManagerBase; the inheritance chain is ChatLogMessageManager → MessageManagerBase → DotNetObject. It exposes 8 public/protected members: 5 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogMessageManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain ChatLogMessageManager → MessageManagerBase → DotNetObject. The surface is method-led (methods 5/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ChatLogMessageManager` | `public ChatLogMessageManager(MPChatVM chatDataSource)` | constructor |
| `Update` | `public void Update()` | method |
| `PostWarningLine` | `protected override void PostWarningLine(string text)` | method |
| `PostSuccessLine` | `protected override void PostSuccessLine(string text)` | method |
| `PostMessageLineFormatted` | `protected override void PostMessageLineFormatted(string text, uint color)` | method |
| `PostMessageLine` | `protected override void PostMessageLine(string text, uint color)` | method |
| `ChatLineData` | `public struct ChatLineData` | property |
| `ChatLineData` | `public struct ChatLineData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MessageManagerBase](../../engine/MessageManagerBase/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
- [same namespace GauntletChatLogView](../GauntletChatLogView/)
