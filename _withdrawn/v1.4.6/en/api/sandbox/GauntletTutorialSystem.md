---
title: "GauntletTutorialSystem"
description: "GauntletTutorialSystem: a public class in SandBox.GauntletUI.Tutorial, inheriting GlobalLayer; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletTutorialSystem

**Namespace:** `SandBox.GauntletUI.Tutorial`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletTutorialSystem : GlobalLayer`
**File:** `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

GauntletTutorialSystem lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletTutorialSystem → GlobalLayer → IComparable. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletTutorialSystem lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Tutorial`, inheritance chain GauntletTutorialSystem → GlobalLayer → IComparable. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentEncyclopediaPageContext` | `public EncyclopediaPages CurrentEncyclopediaPageContext` | property |
| `IsCharacterPortraitPopupOpen` | `public bool IsCharacterPortraitPopupOpen` | property |
| `CurrentContext` | `public TutorialContexts CurrentContext` | property |
| `GauntletTutorialSystem` | `public GauntletTutorialSystem()` | constructor |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnInitialize` | `public static void OnInitialize()` | method |
| `OnUnload` | `public static void OnUnload()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GlobalLayer](../../gui/GlobalLayer/)
- [same namespace TutorialAttribute](../TutorialAttribute/)
- [same namespace TutorialHelper](../TutorialHelper/)
- [same namespace TutorialItemBase](../TutorialItemBase/)
