---
title: "CharacterAttribute"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterAttribute`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterAttribute

**命名空间:** TaleWorlds.Core  
**模块:** TaleWorlds.Core  
**类型:** class（继承 `PropertyObject`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.Core/CharacterAttribute.cs`

`CharacterAttribute` 表示一项角色属性（Vigour 活力、Control 控制、Endurance 耐力、Cunning 智谋、Social 社交、Intelligence 智力）。属性决定可投入的点数，并关联若干技能。

## 概述

mod 通常通过 `DefaultAttributes` 静态字段引用既有属性（如 `DefaultAttributes.Vigour`）。读取角色的属性等级用 `Hero.GetAttributeValue(attr)`，投入属性点用 `HeroDeveloper.AddAttribute(attr, amount)`。

## 心智模型

先把 `CharacterAttribute` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

## 主要属性

\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| Abbreviation \| TextObject \| 属性缩写（仅 get） \|

## Initialize

```csharp
public void Initialize(TextObject name, TextObject description, TextObject abbreviation)
```

定义属性时设置名称、描述与缩写。

## 使用示例

```csharp
// 读取角色的属性等级
CharacterAttribute vigour = DefaultAttributes.Vigour;
int level = hero.GetAttributeValue(vigour);

// 投入属性点（通过 HeroDeveloper）
hero.HeroDeveloper.AddAttribute(vigour, 1);
```

## 参见

- [SkillObject](./SkillObject)
- [HeroDeveloper](../campaign-ext/HeroDeveloper)
- [Hero](../campaign/Hero)
