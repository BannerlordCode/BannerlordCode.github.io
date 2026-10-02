---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting MessageManagerBase; 8 exposed members (5 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs."
---
# ChatLogMessageManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

ChatLogMessageManager lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs. It is a public class, implementing/inheriting MessageManagerBase; the inheritance chain is ChatLogMessageManager → MessageManagerBase. It exposes 8 public/protected members: 5 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogMessageManager is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace matching the module directory; inheritance chain ChatLogMessageManager → MessageManagerBase. The surface is method-led (methods 5/8, properties 1/8), so it mostly exposes operations. MessageManagerBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView)
- [same namespace GauntletChatLogView](../GauntletChatLogView)
