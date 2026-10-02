---
title: "GauntletView"
description: "GauntletView: a public class in TaleWorlds.GauntletUI.Data, inheriting WidgetComponent; 13 exposed members (7 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.Data/GauntletView.cs."
---
# GauntletView

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class GauntletView : WidgetComponent`
**File:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## Overview

GauntletView lives in the TaleWorlds.GauntletUI.Data module, source file TaleWorlds.GauntletUI.Data/GauntletView.cs. It is a public class, implementing/inheriting WidgetComponent; the inheritance chain is GauntletView → WidgetComponent. It exposes 13 public/protected members: 7 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletView is a top-level type in TaleWorlds.GauntletUI.Data, namespace matching the module directory; inheritance chain GauntletView → WidgetComponent. The surface is method-led (methods 7/13, properties 6/13), so it mostly exposes operations. WidgetComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.Data/GauntletView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMovie` | `public GauntletMovie GauntletMovie` | property |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData` | property |
| `ViewModelPath` | `public BindingPath ViewModelPath` | property |
| `ViewModelPathString` | `public string ViewModelPathString` | property |
| `Parent` | `public GauntletView Parent` | property |
| `AddChild` | `public void AddChild(GauntletView child)` | method |
| `RemoveChild` | `public void RemoveChild(GauntletView child)` | method |
| `SwapChildrenAtIndeces` | `public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)` | method |
| `RefreshBinding` | `public void RefreshBinding()` | method |
| `RefreshBindingWithChildren` | `public void RefreshBindingWithChildren()` | method |
| `ReleaseBindingWithChildren` | `public void ReleaseBindingWithChildren()` | method |
| `BindData` | `public void BindData(string property, BindingPath path)` | method |
| `DisplayName` | `public string DisplayName` | property |

## See Also

- [↑ gauntletui-data module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletMovie](../GauntletMovie)
- [same namespace GeneratedGauntletMovie](../GeneratedGauntletMovie)
- [same namespace GeneratedWidgetData](../GeneratedWidgetData)
- [same namespace IGauntletMovie](../IGauntletMovie)
