---
title: "MissionOrderCallbacks"
description: "MissionOrderCallbacks: a public struct in TaleWorlds.MountAndBlade.ViewModelCollection; 12 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs."
---
# MissionOrderCallbacks

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public struct MissionOrderCallbacks`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs`

## Overview

MissionOrderCallbacks lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs. It is a public struct; the inheritance chain is MissionOrderCallbacks. It exposes 12 public/protected members: 6 methods, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionOrderCallbacks is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order) the module directory; inheritance chain MissionOrderCallbacks. The surface is method-led (methods 6/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderCallbacks.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRefreshVisualsDelegate` | `public delegate void OnRefreshVisualsDelegate();` | method |
| `OnToggleActivateOrderStateDelegate` | `public delegate void OnToggleActivateOrderStateDelegate();` | method |
| `OnTransferTroopsFinishedDelegate` | `public delegate void OnTransferTroopsFinishedDelegate();` | method |
| `OnBeforeOrderDelegate` | `public delegate void OnBeforeOrderDelegate();` | method |
| `ToggleOrderPositionVisibilityDelegate` | `public delegate void ToggleOrderPositionVisibilityDelegate(bool value);` | method |
| `GetOrderExecutionParametersDelegate` | `public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate();` | method |
| `OnRefreshVisualsDelegate` | `public delegate void OnRefreshVisualsDelegate()` | nested type |
| `OnToggleActivateOrderStateDelegate` | `public delegate void OnToggleActivateOrderStateDelegate()` | nested type |
| `OnTransferTroopsFinishedDelegate` | `public delegate void OnTransferTroopsFinishedDelegate()` | nested type |
| `OnBeforeOrderDelegate` | `public delegate void OnBeforeOrderDelegate()` | nested type |
| `ToggleOrderPositionVisibilityDelegate` | `public delegate void ToggleOrderPositionVisibilityDelegate(bool value)` | nested type |
| `GetOrderExecutionParametersDelegate` | `public delegate VisualOrderExecutionParameters GetOrderExecutionParametersDelegate()` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM)
- [same namespace MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM)
- [same namespace MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM)
- [same namespace MissionOrderVM](../MissionOrderVM)
