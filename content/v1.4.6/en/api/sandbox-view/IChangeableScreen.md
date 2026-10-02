---
title: "IChangeableScreen"
description: "IChangeableScreen: a public interface in SandBox.View; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox.View/IChangeableScreen.cs."
---
# IChangeableScreen

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public interface IChangeableScreen`
**File:** `SandBox.View/IChangeableScreen.cs`

## Overview

IChangeableScreen lives in the SandBox.View module, source file SandBox.View/IChangeableScreen.cs. It is a public interface; the inheritance chain is IChangeableScreen. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IChangeableScreen is a top-level type in SandBox.View, namespace matching the module directory; inheritance chain IChangeableScreen. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/IChangeableScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnyUnsavedChanges` | `bool AnyUnsavedChanges();` | method |
| `CanChangesBeApplied` | `bool CanChangesBeApplied();` | method |
| `ApplyChanges` | `void ApplyChanges();` | method |
| `ResetChanges` | `void ResetChanges();` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMusicHandler](../CampaignMusicHandler)
- [same namespace MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier)
- [same namespace PreloadScreen](../PreloadScreen)
- [same namespace SandboxView](../SandboxView)
