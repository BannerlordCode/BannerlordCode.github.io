---
title: "AlleyHelper"
description: "AlleyHelper 的自动生成类参考。"
---
# AlleyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class AlleyHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/AlleyHelper.cs`

## 概述

`AlleyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `AlleyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenScreenForManagingAlley
`public static void OpenScreenForManagingAlley(bool isNewAlley, TroopRoster leftMemberRoster, PartyPresentationDoneButtonDelegate onDoneButtonClicked, TextObject leftText, PartyPresentationCancelButtonDelegate onCancelButtonClicked = null)`

**用途 / Purpose:** 打开screen for managing alley对应的资源或界面。

```csharp
// 静态调用，不需要实例
AlleyHelper.OpenScreenForManagingAlley(false, leftMemberRoster, onDoneButtonClicked, leftText, null);
```

### CreateMultiSelectionInquiryForSelectingClanMemberToAlley
`public static void CreateMultiSelectionInquiryForSelectingClanMemberToAlley(Alley alley, Action<List<InquiryElement>> affirmativeAction, Action<List<InquiryElement>> negativeAction)`

**用途 / Purpose:** 构建一个新的 multi selection inquiry for selecting clan member to alley 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
AlleyHelper.CreateMultiSelectionInquiryForSelectingClanMemberToAlley(alley, affirmativeAction, negativeAction);
```

## 使用示例

```csharp
AlleyHelper.Initialize();
```

## 参见

- [本区域目录](../)