---
title: "XmlHelper"
description: "XmlHelper: a public class in TaleWorlds.Core; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/XmlHelper.cs."
---
# XmlHelper

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class XmlHelper`
**File:** `TaleWorlds.Core/XmlHelper.cs`

## Overview

XmlHelper lives in the TaleWorlds.Core module, source file TaleWorlds.Core/XmlHelper.cs. It is a public class; the inheritance chain is XmlHelper. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: XmlHelper is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain XmlHelper. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/XmlHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadInt` | `public static int ReadInt(XmlNode node, string str)` | method |
| `ReadInt` | `public static void ReadInt(ref int val, XmlNode node, string str)` | method |
| `ReadFloat` | `public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)` | method |
| `ReadString` | `public static string ReadString(XmlNode node, string str)` | method |
| `ReadHexCode` | `public static void ReadHexCode(ref uint val, XmlNode node, string str)` | method |
| `ReadBool` | `public static bool ReadBool(XmlNode node, string str)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
