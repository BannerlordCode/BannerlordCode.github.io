---
title: "HotKeyManager"
description: "HotKeyManager: a public class in TaleWorlds.InputSystem; 14 exposed members (12 methods, 0 properties, 0 fields). Canonical bucket system. Source: TaleWorlds.InputSystem/HotKeyManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HotKeyManager

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public static class HotKeyManager`
**File:** `TaleWorlds.InputSystem/HotKeyManager.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## Overview

HotKeyManager lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/HotKeyManager.cs. It is a public class; the inheritance chain is HotKeyManager. It exposes 14 public/protected members: 12 methods, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HotKeyManager lands in canonical bucket `system` (matched rule `rule:TaleWorlds.InputSystem`), namespace `TaleWorlds.InputSystem`, inheritance chain HotKeyManager. The surface is method-led (methods 12/14, properties 0/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/HotKeyManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnKeybindsChanged;` | `public static event HotKeyManager.OnKeybindsChangedEvent OnKeybindsChanged;` | event |
| `GetHotKeyId` | `public static string GetHotKeyId(string categoryName, string hotKeyId)` | method |
| `GetHotKeyId` | `public static string GetHotKeyId(string categoryName, int hotKeyId)` | method |
| `GetCategory` | `public static GameKeyContext GetCategory(string categoryName)` | method |
| `GetAllCategories` | `public static Dictionary<string, GameKeyContext>.ValueCollection GetAllCategories()` | method |
| `Tick` | `public static void Tick(float dt)` | method |
| `Initialize` | `public static void Initialize(PlatformFilePath savePath, bool isRDownSwappedWithRRight)` | method |
| `RegisterInitialContexts` | `public static void RegisterInitialContexts(IEnumerable<GameKeyContext>contexts)` | method |
| `RegisterContext` | `public static void RegisterContext(GameKeyContext context, bool ignoreSerialize = false)` | method |
| `ShouldNotifyDocumentVersionDifferent` | `public static bool ShouldNotifyDocumentVersionDifferent()` | method |
| `Reset` | `public static void Reset()` | method |
| `MarkForSave` | `public static void MarkForSave()` | method |
| `OnKeybindsChangedEvent` | `public delegate void OnKeybindsChangedEvent();` | method |
| `OnKeybindsChangedEvent` | `public delegate void OnKeybindsChangedEvent()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EmptyInputContext](../EmptyInputContext/)
- [same namespace GameAxisKey](../GameAxisKey/)
- [same namespace GameKey](../GameKey/)
- [same namespace GameKeyContext](../GameKeyContext/)
