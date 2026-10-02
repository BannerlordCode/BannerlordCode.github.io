---
title: "CharacterCreationStageViewBase"
description: "CharacterCreationStageViewBase：SandBox.View.CharacterCreation 的 public 类，继承 ICharacterCreationStageListener；公开成员 15 个（方法 13、属性 0、字段 1）。canonical 桶 sandbox。源文件 SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationStageViewBase

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**File:** `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

CharacterCreationStageViewBase 位于 SandBox.View 模块，源文件 SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs。它是一个 public 类（abstract），实现/继承 ICharacterCreationStageListener，继承链为 CharacterCreationStageViewBase → ICharacterCreationStageListener。public/protected 成员共 15 个：13 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationStageViewBase 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.CharacterCreation`，继承链 CharacterCreationStageViewBase → ICharacterCreationStageListener。成员构成以方法为主（方法 13/15，属性 0/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationStageViewBase` | `protected CharacterCreationStageViewBase(ControlCharacterCreationStage affirmativeAction, ControlCharacterCreationStage negativeAction, ControlCharacterCreationStage refreshAction, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction)` | 构造函数 |
| `SetGenericScene` | `public virtual void SetGenericScene(Scene scene)` | 方法 |
| `OnRefresh` | `protected virtual void OnRefresh()` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<ScreenLayer>GetLayers();` | 方法 |
| `NextStage` | `public abstract void NextStage();` | 方法 |
| `PreviousStage` | `public abstract void PreviousStage();` | 方法 |
| `OnFinalize` | `protected virtual void OnFinalize()` | 方法 |
| `Tick` | `public virtual void Tick(float dt)` | 方法 |
| `GetVirtualStageCount` | `public abstract int GetVirtualStageCount();` | 方法 |
| `GoToIndex` | `public virtual void GoToIndex(int index)` | 方法 |
| `LoadEscapeMenuMovie` | `public abstract void LoadEscapeMenuMovie();` | 方法 |
| `ReleaseEscapeMenuMovie` | `public abstract void ReleaseEscapeMenuMovie();` | 方法 |
| `HandleEscapeMenu` | `public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)` | 方法 |
| `List` | `public List<EscapeMenuItemVM>GetEscapeMenuItems(CharacterCreationStageViewBase view)` | 方法 |
| `_cameraPosition` | `protected readonly Vec3 _cameraPosition` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ICharacterCreationStageListener](../../campaign/ICharacterCreationStageListener/)
- [同命名空间 CharacterCreationScreen](../CharacterCreationScreen/)
- [同命名空间 CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute/)
