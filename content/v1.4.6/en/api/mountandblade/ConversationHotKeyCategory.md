---
title: "ConversationHotKeyCategory"
description: "ConversationHotKeyCategory: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 4 exposed members (0 methods, 0 properties, 3 fields). Source: TaleWorlds.MountAndBlade/ConversationHotKeyCategory.cs."
---
# ConversationHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class ConversationHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/ConversationHotKeyCategory.cs`

## Overview

ConversationHotKeyCategory lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ConversationHotKeyCategory.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is ConversationHotKeyCategory → GameKeyContext. It exposes 4 public/protected members: 3 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationHotKeyCategory is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ConversationHotKeyCategory → GameKeyContext. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ConversationHotKeyCategory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationHotKeyCategory` | `public ConversationHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `ContinueKey` | `public const string ContinueKey` | field |
| `ContinueClick` | `public const string ContinueClick` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
