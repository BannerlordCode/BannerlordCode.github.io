---
title: "MBCharacterSkills"
description: "MBCharacterSkills: a public class in TaleWorlds.Core, inheriting MBObjectBase; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/MBCharacterSkills.cs."
---
# MBCharacterSkills

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBCharacterSkills : MBObjectBase`
**File:** `TaleWorlds.Core/MBCharacterSkills.cs`

## Overview

MBCharacterSkills lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBCharacterSkills.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is MBCharacterSkills → MBObjectBase. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBCharacterSkills is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBCharacterSkills → MBObjectBase. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBCharacterSkills.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PropertyOwner` | `public PropertyOwner<SkillObject>Skills` | property |
| `MBCharacterSkills` | `public MBCharacterSkills()` | constructor |
| `Init` | `public void Init(MBObjectManager objectManager, XmlNode node)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
