---
title: "GenericGameKeyContext"
description: "GenericGameKeyContext: a public class in TaleWorlds.MountAndBlade, inheriting GameKeyContext; 13 exposed members (0 methods, 1 properties, 11 fields). Source: TaleWorlds.MountAndBlade/GenericGameKeyContext.cs."
---
# GenericGameKeyContext

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class GenericGameKeyContext : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GenericGameKeyContext.cs`

## Overview

GenericGameKeyContext lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GenericGameKeyContext.cs. It is a public class (sealed), implementing/inheriting GameKeyContext; the inheritance chain is GenericGameKeyContext → GameKeyContext. It exposes 13 public/protected members: 1 properties, 11 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericGameKeyContext is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain GenericGameKeyContext → GameKeyContext. The surface is property-led (properties 1/13, methods 0/13), so it mostly exposes state for reading. GameKeyContext on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GenericGameKeyContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GenericGameKeyContext Current` | property |
| `GenericGameKeyContext` | `public GenericGameKeyContext() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | constructor |
| `CategoryId` | `public const string CategoryId` | field |
| `Up` | `public const int Up` | field |
| `Down` | `public const int Down` | field |
| `Right` | `public const int Right` | field |
| `Left` | `public const int Left` | field |
| `MovementAxisX` | `public const string MovementAxisX` | field |
| `MovementAxisY` | `public const string MovementAxisY` | field |
| `CameraAxisX` | `public const string CameraAxisX` | field |
| `CameraAxisY` | `public const string CameraAxisY` | field |
| `Leave` | `public const int Leave` | field |
| `ShowIndicators` | `public const int ShowIndicators` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
