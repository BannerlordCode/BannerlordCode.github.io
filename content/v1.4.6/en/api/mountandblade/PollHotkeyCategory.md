---
title: "PollHotkeyCategory"
description: "PollHotkeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 4 exposed members (0 methods, 0 properties, 3 fields). Source: TaleWorlds.MountAndBlade/PollHotkeyCategory.cs."
---
# PollHotkeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class PollHotkeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/PollHotkeyCategory.cs`

## Overview

PollHotkeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PollHotkeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is PollHotkeyCategory → GameKeyContext. It exposes 4 public/protected members: 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PollHotkeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PollHotkeyCategory → GameKeyContext. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PollHotkeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PollHotkeyCategory` | `public PollHotkeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `AcceptPoll` | `public const int AcceptPoll` | field |
| `DeclinePoll` | `public const int DeclinePoll` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
