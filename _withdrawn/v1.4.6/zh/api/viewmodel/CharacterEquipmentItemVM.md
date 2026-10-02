---
title: "CharacterEquipmentItemVM"
description: "CharacterEquipmentItemVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterEquipmentItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class CharacterEquipmentItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## 概述

CharacterEquipmentItemVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CharacterEquipmentItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterEquipmentItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.Core.ViewModelCollection`），命名空间 `TaleWorlds.Core.ViewModelCollection`，继承链 CharacterEquipmentItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/CharacterEquipmentItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterEquipmentItemVM` | `public CharacterEquipmentItemVM(ItemObject item)` | 构造函数 |
| `ExecuteBeginHint` | `public virtual void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public virtual void ExecuteEndHint()` | 方法 |
| `Type` | `public string Type` | 属性 |
| `HasItem` | `public bool HasItem` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BattleResultVM](../BattleResultVM/)
- [同命名空间 CharacterViewModel](../CharacterViewModel/)
- [同命名空间 CharacterWithActionViewModel](../CharacterWithActionViewModel/)
- [同命名空间 ControlCharacterCreationStage](../ControlCharacterCreationStage/)
