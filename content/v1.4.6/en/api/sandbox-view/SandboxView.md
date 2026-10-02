---
title: "SandboxView"
description: "SandboxView: a public class in SandBox.View; 7 exposed members (5 methods, 2 properties, 0 fields). Source: SandBox.View/SandboxView.cs."
---
# SandboxView

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public abstract class SandboxView`
**File:** `SandBox.View/SandboxView.cs`

## Overview

SandboxView lives in the SandBox.View module, source file SandBox.View/SandboxView.cs. It is a public class (abstract); the inheritance chain is SandboxView. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxView is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain SandboxView. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/SandboxView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFinalized` | `public bool IsFinalized` | property |
| `Layer` | `public ScreenLayer Layer` | property |
| `OnActivate` | `protected internal virtual void OnActivate()` | method |
| `OnDeactivate` | `protected internal virtual void OnDeactivate()` | method |
| `OnInitialize` | `protected internal virtual void OnInitialize()` | method |
| `OnFinalize` | `protected internal virtual void OnFinalize()` | method |
| `OnFrameTick` | `protected internal virtual void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace IChangeableScreen](../IChangeableScreen)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace PreloadScreen](../PreloadScreen)
