---
title: "ConsoleCommandMethod"
description: "ConsoleCommandMethod: a public class in TaleWorlds.MountAndBlade, inheriting Attribute; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ConsoleCommandMethod.cs."
---
# ConsoleCommandMethod

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ConsoleCommandMethod : Attribute`
**File:** `TaleWorlds.MountAndBlade/ConsoleCommandMethod.cs`

## Overview

ConsoleCommandMethod lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ConsoleCommandMethod.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is ConsoleCommandMethod → Attribute. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConsoleCommandMethod is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ConsoleCommandMethod → Attribute. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ConsoleCommandMethod.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CommandName` | `public string CommandName` | property |
| `Description` | `public string Description` | property |
| `ConsoleCommandMethod` | `public ConsoleCommandMethod(string commandName, string description)` | constructor |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
