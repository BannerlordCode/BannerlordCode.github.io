---
title: "PartyNavigationElement"
description: "PartyNavigationElement：SandBox.View.Map.Navigation.NavigationElements 的 public 类，继承 MapNavigationElementBase；公开成员 11 个（方法 6、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyNavigationElement

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class PartyNavigationElement : MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

PartyNavigationElement 位于 SandBox.View 模块，源文件 SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs。它是一个 public 类，实现/继承 MapNavigationElementBase，继承链为 PartyNavigationElement → MapNavigationElementBase → INavigationElement。public/protected 成员共 11 个：6 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyNavigationElement 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map.Navigation.NavigationElements`，继承链 PartyNavigationElement → MapNavigationElementBase → INavigationElement。成员构成以方法为主（方法 6/11，属性 4/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public override string StringId` | 属性 |
| `IsActive` | `public override bool IsActive` | 属性 |
| `IsLockingNavigation` | `public override bool IsLockingNavigation` | 属性 |
| `HasAlert` | `public override bool HasAlert` | 属性 |
| `PartyNavigationElement` | `public PartyNavigationElement(MapNavigationHandler handler) : base(handler)` | 构造函数 |
| `GetPermission` | `protected override NavigationPermissionItem GetPermission()` | 方法 |
| `GetTooltip` | `protected override TextObject GetTooltip()` | 方法 |
| `GetAlertTooltip` | `protected override TextObject GetAlertTooltip()` | 方法 |
| `OpenView` | `public override void OpenView()` | 方法 |
| `OpenView` | `public override void OpenView(params object[]parameters)` | 方法 |
| `GoToLink` | `public override void GoToLink()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapNavigationElementBase](../MapNavigationElementBase/)
- [同命名空间 CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement/)
- [同命名空间 ClanNavigationElement](../ClanNavigationElement/)
- [同命名空间 ClanScreenPermissionEvent](../ClanScreenPermissionEvent/)
- [同命名空间 EscapeMenuNavigationElement](../EscapeMenuNavigationElement/)
