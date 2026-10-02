---
title: "GauntletMapConversationView"
description: "GauntletMapConversationView：SandBox.GauntletUI.Map 的 public 类，继承 MapConversationView、IConversationStateHandler；公开成员 11 个（方法 10、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Map/GauntletMapConversationView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapConversationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapConversationView : MapConversationView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Map/GauntletMapConversationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletMapConversationView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapConversationView.cs。它是一个 public 类，实现/继承 MapConversationView、IConversationStateHandler，继承链为 GauntletMapConversationView → MapConversationView → MapView → SandboxView。public/protected 成员共 11 个：10 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapConversationView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Map`，继承链 GauntletMapConversationView → MapConversationView → MapView → SandboxView。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapConversationView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapConversationView` | `public GauntletMapConversationView()` | 构造函数 |
| `InitializeConversation` | `protected override void InitializeConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | 方法 |
| `FinalizeConversation` | `protected override void FinalizeConversation()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `IsEscaped` | `protected override bool IsEscaped()` | 方法 |
| `IsOpeningEscapeMenuOnFocusChangeAllowed` | `protected override bool IsOpeningEscapeMenuOnFocusChangeAllowed()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | 方法 |
| `OnMenuModeTick` | `protected override void OnMenuModeTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapConversationView](../MapConversationView/)
- [基类/接口 IConversationStateHandler](../../campaign-ext/IConversationStateHandler/)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView/)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView/)
