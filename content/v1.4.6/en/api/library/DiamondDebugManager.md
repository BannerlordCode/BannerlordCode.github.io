---
title: "DiamondDebugManager"
description: "DiamondDebugManager: a public class in TaleWorlds.Library, inheriting IDebugManager; 6 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/DiamondDebugManager.cs."
---
# DiamondDebugManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class DiamondDebugManager : IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## Overview

DiamondDebugManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/DiamondDebugManager.cs. It is a public class, implementing/inheriting IDebugManager; the inheritance chain is DiamondDebugManager → IDebugManager. It exposes 6 public/protected members: 2 methods, 1 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DiamondDebugManager is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain DiamondDebugManager → IDebugManager. The surface is method-led (methods 2/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/DiamondDebugManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DiamondDebugManager` | `public DiamondDebugManager(ParameterContainer parameters)` | constructor |
| `DiamondDebugManager` | `public DiamondDebugManager()` | constructor |
| `GetLogLevel` | `public int GetLogLevel()` | method |
| `PrintMessage` | `protected void PrintMessage(string message, DiamondDebugManager.DiamondDebugCategory debugCategory)` | method |
| `DiamondDebugCategory` | `public enum DiamondDebugCategory` | property |
| `DiamondDebugCategory` | `public enum DiamondDebugCategory` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IDebugManager](../IDebugManager)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
