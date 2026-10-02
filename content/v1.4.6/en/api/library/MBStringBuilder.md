---
title: "MBStringBuilder"
description: "MBStringBuilder: a public struct in TaleWorlds.Library; 13 exposed members (12 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/MBStringBuilder.cs."
---
# MBStringBuilder

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct MBStringBuilder`
**File:** `TaleWorlds.Library/MBStringBuilder.cs`

## Overview

MBStringBuilder lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBStringBuilder.cs. It is a public struct; the inheritance chain is MBStringBuilder. It exposes 13 public/protected members: 12 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBStringBuilder is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBStringBuilder. The surface is method-led (methods 12/13, properties 1/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBStringBuilder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public void Initialize(int capacity = 16, [CallerMemberName]string callerMemberName = "")` | method |
| `ToStringAndRelease` | `public string ToStringAndRelease()` | method |
| `Release` | `public void Release()` | method |
| `Append` | `public MBStringBuilder Append(char value)` | method |
| `Append` | `public MBStringBuilder Append(int value)` | method |
| `Append` | `public MBStringBuilder Append(uint value)` | method |
| `Append` | `public MBStringBuilder Append(float value)` | method |
| `Append` | `public MBStringBuilder Append(double value)` | method |
| `Append` | `public MBStringBuilder Append<T>(T value)` | method |
| `AppendLine` | `public MBStringBuilder AppendLine()` | method |
| `AppendLine` | `public MBStringBuilder AppendLine<T>(T value)` | method |
| `Length` | `public int Length` | property |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
