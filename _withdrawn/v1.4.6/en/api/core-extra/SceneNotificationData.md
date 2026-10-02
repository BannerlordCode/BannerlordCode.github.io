---
title: "SceneNotificationData"
description: "SceneNotificationData: a public class in TaleWorlds.Core; 30 exposed members (6 methods, 20 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/SceneNotificationData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SceneNotificationData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SceneNotificationData`
**File:** `TaleWorlds.Core/SceneNotificationData.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

SceneNotificationData lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SceneNotificationData.cs. It is a public class; the inheritance chain is SceneNotificationData. It exposes 30 public/protected members: 6 methods, 20 properties, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneNotificationData lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain SceneNotificationData. The surface is property-led (properties 20/30, methods 6/30), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SceneNotificationData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SceneID` | `public virtual string SceneID` | property |
| `SoundEventPath` | `public virtual string SoundEventPath` | property |
| `TitleText` | `public virtual TextObject TitleText` | property |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText` | property |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText` | property |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText` | property |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended` | property |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText` | property |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText` | property |
| `AffirmativeText` | `public virtual TextObject AffirmativeText` | property |
| `NegativeText` | `public virtual TextObject NegativeText` | property |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown` | property |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown` | property |
| `PauseActiveState` | `public virtual bool PauseActiveState` | property |
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext` | property |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties` | property |
| `OnAffirmativeAction` | `public virtual void OnAffirmativeAction()` | method |
| `OnNegativeAction` | `public virtual void OnNegativeAction()` | method |
| `OnCloseAction` | `public virtual void OnCloseAction()` | method |
| `Banner[]GetBanners` | `public virtual Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public virtual SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `SceneNotificationData.SceneNotificationShip[]GetShips` | `public virtual SceneNotificationData.SceneNotificationShip[]GetShips()` | method |
| `SceneNotificationCharacter` | `public readonly struct SceneNotificationCharacter` | property |
| `SceneNotificationShip` | `public readonly struct SceneNotificationShip` | property |
| `NotificationSceneProperties` | `public struct NotificationSceneProperties` | property |
| `RelevantContextType` | `public enum RelevantContextType` | property |
| `SceneNotificationCharacter` | `public readonly struct SceneNotificationCharacter` | nested type |
| `SceneNotificationShip` | `public readonly struct SceneNotificationShip` | nested type |
| `NotificationSceneProperties` | `public struct NotificationSceneProperties` | nested type |
| `RelevantContextType` | `public enum RelevantContextType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
