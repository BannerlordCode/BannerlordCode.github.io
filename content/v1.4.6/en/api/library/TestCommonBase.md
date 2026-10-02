---
title: "TestCommonBase"
description: "TestCommonBase: a public class in TaleWorlds.Library; 14 exposed members (11 methods, 1 properties, 1 fields). Source: TaleWorlds.Library/TestCommonBase.cs."
---
# TestCommonBase

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class TestCommonBase`
**File:** `TaleWorlds.Library/TestCommonBase.cs`

## Overview

TestCommonBase lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TestCommonBase.cs. It is a public class (abstract); the inheritance chain is TestCommonBase. It exposes 14 public/protected members: 11 methods, 1 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TestCommonBase is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TestCommonBase. The surface is method-led (methods 11/14, properties 1/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TestCommonBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Tick` | `public abstract void Tick();` | method |
| `BaseInstance` | `public static TestCommonBase BaseInstance` | property |
| `StartTimeoutTimer` | `public void StartTimeoutTimer()` | method |
| `ToggleTimeoutTimer` | `public void ToggleTimeoutTimer()` | method |
| `CheckTimeoutTimer` | `public bool CheckTimeoutTimer()` | method |
| `TestCommonBase` | `protected TestCommonBase()` | constructor |
| `GetGameStatus` | `public virtual string GetGameStatus()` | method |
| `WaitFor` | `public void WaitFor(double seconds)` | method |
| `WaitUntil` | `public virtual async Task WaitUntil(Func<bool>func)` | method |
| `WaitForAsync` | `public Task WaitForAsync(double seconds, Random random)` | method |
| `WaitForAsync` | `public Task WaitForAsync(double seconds)` | method |
| `GetAttachmentsFolderPath` | `public static string GetAttachmentsFolderPath()` | method |
| `OnFinalize` | `public virtual void OnFinalize()` | method |
| `TestLock` | `public object TestLock` | field |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
