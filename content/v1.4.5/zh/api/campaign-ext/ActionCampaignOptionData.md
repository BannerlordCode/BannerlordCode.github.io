---
title: "ActionCampaignOptionData"
description: "战役选项体系中的「按钮型」选项：持有一个 Action 回调，点击后执行回调而非修改数值，GetDataType 返回 CampaignOptionDataType.Action。"
---
# ActionCampaignOptionData

**命名空间：** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class ActionCampaignOptionData : CampaignOptionData`  
**基类：** `CampaignOptionData`（抽象类，实现 `ICampaignOptionData`）  
**源文件：** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`（24 行）

## 概述

`ActionCampaignOptionData` 是战役选项（campaign options）体系中四种选项类型之一：**按钮型选项**。它继承抽象基类 `CampaignOptionData`（`CampaignOptionData.cs:8`），只增加一个 `Action` 委托字段（`ActionCampaignOptionData.cs:7`）和两个成员——`GetDataType()` 返回 `CampaignOptionDataType.Action`（`:15`），`ExecuteAction()` 触发回调（`:20`）。

选项体系按 `CampaignOptionDataType` 分为 Boolean / Numeric / Selection / Action 四类：前三类持有数值（通过基类的 `_getValue` / `_setValue` 委托读写），而 Action 类**不持有数值**——构造函数给基类的 `getValue` / `setValue` 传 `null`（`:10`），点击选项时执行的是构造时传入的回调。选项界面据此把 Action 选项渲染成按钮而不是滑条或开关。

## 心智模型

把这个类想成**选项列表里的一个按钮**，而不是一个数值容器。三个要点：

1. **identifier 是本地化键，不是显示文本。** 基类构造函数用 `identifier` 去 `GameTexts` 查 `str_campaign_options_type` / `str_campaign_options_description` 两个表，得到选项名与描述（`CampaignOptionData.cs:32`、`:47`）。所以 mod 新建选项时，`identifier` 必须先在本地化文本表里注册，否则显示为空。
2. **priorityIndex 决定排序，enableState 决定可点性。** `priorityIndex` 是选项在列表中的排序权重；`enableState` 取 `Enabled` / `DisabledLater` / `Disabled` 三态，`GetIsDisabledWithReason()`（`CampaignOptionData.cs:97`）把三态与构造时传入的 `getIsDisabledWithReason` 委托合并成「是否禁用 + 原因文本 + 禁用时回退值」。
3. **Action 与数值无关。** 因为基类拿到的是 `null` 委托，`GetValue()` 恒返回 `0f`、`SetValue()` 是空操作（`CampaignOptionData.cs:154`、`:159`）。对 Action 选项唯一有意义的调用是 `ExecuteAction()`。

## 怎么用

### 怎么拿到

- **源树路径：** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`（24 行）
- **声明处：** `ActionCampaignOptionData.cs:5`（类声明）、`:9`（构造函数）、`:15`（GetDataType）、`:20`（ExecuteAction）
- **运行时入口：** 选项列表由战役选项界面（campaign options screen）构建，mod 通常**不直接 new 它**，而是从选项列表里按类型筛选：

```csharp
// 从选项列表中找出所有按钮型选项
foreach (CampaignOptionData option in options)
{
    if (option is ActionCampaignOptionData actionOption)
    {
        // 这是一个 Action 选项
    }
}
```

### 典型用法

- **mod 自定义按钮选项：** 用 mod 的本地化键作 identifier、把回调接到 mod 功能上，构造后加入选项列表。
- **批量执行或检查选项：** 遍历选项列表，对 Action 类型调用 `ExecuteAction()`，或先用 `GetIsDisabledWithReason()` 检查可点性。
- **复用基类契约：** 选项名、描述、排序、启用状态全部继承自基类，mod 不需要也无法重写它们。

### 坑

- **GetValue / SetValue 对 Action 选项无效。** 基类拿到的是 `null` 委托，前者恒返回 `0f`，后者是空操作——别用它们读回「按钮状态」。
- **identifier 必须先有本地化文本。** 基类构造时就会查表，查不到显示为空字符串。
- **ExecuteAction 不检查启用状态。** 它直接 `Invoke` 回调；调用前要自己用 `GetIsDisabledWithReason()` 判断，否则禁用选项也会被触发。
- **回调在构造时捕获。** `Action` 是普通委托，构造后不可换；需要动态行为时要在回调内部判断，而不是试图替换委托。

## 关键成员

### 构造函数

`public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)`（`:9`）

把 `action` 存入 `_action`（`:7`），其余参数转发给基类构造（`:10`）。注意基类的 `getValue` / `setValue` 传的是 `null`——Action 选项不参与数值读写。`getIsDisabledWithReason` 是可选的禁用检查委托，由基类在 `GetIsDisabledWithReason()` 中与 `enableState` 合并求值。

### GetDataType

`public override CampaignOptionDataType GetDataType()`（`:15`）

返回 `CampaignOptionDataType.Action`。选项界面按返回值决定渲染方式：Action → 按钮，其余三类 → 滑条 / 开关 / 下拉。

### ExecuteAction

`public void ExecuteAction()`（`:20`）

触发构造时传入的回调（`_action?.Invoke()`）。**不做任何启用状态检查**——调用前需自行确认选项可点。

### 继承自 CampaignOptionData 的成员

- `GetName()` / `GetDescription()`（`CampaignOptionData.cs:144`、`:149`）：返回由 identifier 查表得到的本地化名称与描述。
- `GetPriorityIndex()`（`:70`）：选项排序权重。
- `GetEnableState()`（`:139`）：返回构造时传入的启用状态枚举。
- `GetIsDisabledWithReason()`（`:97`）：返回 `CampaignOptionDisableStatus`，含 `IsDisabled`、`DisabledReason`（本地化原因文本）、`ValueIfDisabled`（禁用回退值）。
- `GetValue()` / `SetValue()`（`:154`、`:159`）：对 Action 选项分别是恒 `0f` 与空操作。

## 真实示例

示例一：mod 构造一个按钮型选项，把回调接到自己的功能上：

```csharp
using System;
using TaleWorlds.CampaignSystem.ViewModelCollection;
using TaleWorlds.Localization;

public static class MyOptionFactory
{
    public static ActionCampaignOptionData CreateOpenConsoleOption()
    {
        return new ActionCampaignOptionData(
            identifier: "my_mod_open_console",
            priorityIndex: 100,
            enableState: CampaignOptionEnableState.Enabled,
            action: () => InformationManager.ShowInquiry(new InquiryData(
                "My Mod",
                "The console would open here.",
                true, false, "OK", "", null, null)),
            getIsDisabledWithReason: null);
    }
}
```

示例二：遍历选项列表，只对按钮型选项做执行前检查并触发：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

public static class CampaignOptionHelper
{
    public static void ExecuteOptionSafely(CampaignOptionData option)
    {
        if (option.GetDataType() != CampaignOptionDataType.Action) return;
        if (option is not ActionCampaignOptionData actionOption) return;

        CampaignOptionDisableStatus status = option.GetIsDisabledWithReason();
        if (status.IsDisabled)
        {
            // status.DisabledReason 是本地化后的禁用原因，可显示给玩家
            return;
        }
        actionOption.ExecuteAction();
    }
}
```

示例三：mod 想确认某个选项当前是否可点（例如在自己的 UI 中镜像选项状态）：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection;

public static bool IsOptionClickable(CampaignOptionData option)
{
    CampaignOptionDisableStatus status = option.GetIsDisabledWithReason();
    return !status.IsDisabled;
}
```

## 参见

- [CampaignOptionData](../../viewmodel/CampaignOptionData) — 抽象基类，定义选项的标识、排序、启用状态与禁用原因契约
- [CampaignOptionDataType](../../viewmodel/CampaignOptionDataType) — 选项类型枚举，`GetDataType` 返回 `Action`
- [CampaignOptionEnableState](../../viewmodel/CampaignOptionEnableState) — 启用状态枚举（Enabled / DisabledLater / Disabled）
- [CampaignOptionDisableStatus](../../viewmodel/CampaignOptionDisableStatus) — 禁用状态结构，`GetIsDisabledWithReason` 的返回类型

## 导航

- [本区域目录](../)
- **父级：** [campaign API](../../)
- **相关：** [CampaignOptionData](../../viewmodel/CampaignOptionData) · [CampaignOptionDataType](../../viewmodel/CampaignOptionDataType) · [CampaignOptionEnableState](../../viewmodel/CampaignOptionEnableState)
