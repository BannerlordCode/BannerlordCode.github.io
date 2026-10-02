---
title: "WindowsForm"
description: "WindowsForm: a public class in TaleWorlds.TwoDimension.Standalone; 13 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/WindowsForm.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WindowsForm

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class WindowsForm`
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

WindowsForm lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/WindowsForm.cs. It is a public class; the inheritance chain is WindowsForm. It exposes 13 public/protected members: 5 methods, 5 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WindowsForm lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain WindowsForm. The surface is method-led (methods 5/13, properties 5/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/WindowsForm.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `Text` | `public string Text` | property |
| `Handle` | `public IntPtr Handle` | property |
| `IsMinimized` | `public bool IsMinimized` | property |
| `WindowsForm` | `public WindowsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, string name = null) : this(x, y, width, height, resourceDepot, IntPtr.Zero, borderlessWindow, enableWindowBlur, name)` | constructor |
| `WindowsForm` | `public WindowsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, IntPtr parent, bool borderlessWindow = false, bool enableWindowBlur = false, string name = null)` | constructor |
| `WindowsForm` | `public WindowsForm(int width, int height, ResourceDepot resourceDepot) : this(100, 100, width, height, resourceDepot, false, false, null)` | constructor |
| `SetParent` | `public void SetParent(IntPtr parentHandle)` | method |
| `Show` | `public void Show()` | method |
| `Hide` | `public void Hide()` | method |
| `Destroy` | `public void Destroy()` | method |
| `AddMessageHandler` | `public void AddMessageHandler(WindowsFormMessageHandler messageHandler)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
