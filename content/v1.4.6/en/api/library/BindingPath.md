---
title: "BindingPath"
description: "BindingPath: a public class in TaleWorlds.Library; 21 exposed members (12 methods, 6 properties, 0 fields). Source: TaleWorlds.Library/BindingPath.cs."
---
# BindingPath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BindingPath`
**File:** `TaleWorlds.Library/BindingPath.cs`

## Overview

BindingPath lives in the TaleWorlds.Library module, source file TaleWorlds.Library/BindingPath.cs. It is a public class; the inheritance chain is BindingPath. It exposes 21 public/protected members: 12 methods, 6 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BindingPath is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain BindingPath. The surface is method-led (methods 12/21, properties 6/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/BindingPath.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Path` | `public string Path` | property |
| `string[]Nodes` | `public string[]Nodes` | property |
| `FirstNode` | `public string FirstNode` | property |
| `LastNode` | `public string LastNode` | property |
| `BindingPath` | `public BindingPath(string path)` | constructor |
| `BindingPath` | `public BindingPath(int path)` | constructor |
| `CreateFromProperty` | `public static BindingPath CreateFromProperty(string propertyName)` | method |
| `BindingPath` | `public BindingPath(IEnumerable<string>nodes)` | constructor |
| `SubPath` | `public BindingPath SubPath` | property |
| `ParentPath` | `public BindingPath ParentPath` | property |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `IsRelatedWithPathAsString` | `public static bool IsRelatedWithPathAsString(string path, string referencePath)` | method |
| `IsRelatedWithPath` | `public static bool IsRelatedWithPath(string path, BindingPath referencePath)` | method |
| `IsRelatedWith` | `public bool IsRelatedWith(BindingPath referencePath)` | method |
| `DecrementIfRelatedWith` | `public void DecrementIfRelatedWith(BindingPath path, int startIndex)` | method |
| `Simplify` | `public BindingPath Simplify()` | method |
| `Append` | `public BindingPath Append(BindingPath bindingPath)` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
