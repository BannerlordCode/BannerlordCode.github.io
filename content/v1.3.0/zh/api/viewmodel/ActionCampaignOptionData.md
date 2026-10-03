---
title: "ActionCampaignOptionData"
description: "战役设置里「点一下就执行」的那一类选项：把一个 System.Action 塞进 CampaignOptionData 的空值槽位，用 GetDataType 返回 Action 让 UI 把它渲染成按钮而不是滑条。"
---

# ActionCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ActionCampaignOptionData : CampaignOptionData`
**Base:** `CampaignOptionData`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ActionCampaignOptionData.cs`（全文 34 行）

## 概述

战役设置（[CampaignOptionsVM](../CampaignOptionsVM)）里的选项分两大类：**有值的**（滑条 / 下拉 / 选择框，值存 `Func<float> getValue` + `Action<float> setValue`）和**没值的**（按钮，点一下就走一个动作）。本类属于后者，而且它是这一类里唯一的具体实现——[BooleanCampaignOptionData](../BooleanCampaignOptionData) 虽然也是无值类型，但它的语义是「勾选」而不是「点击」。

构造函数只有两句实质内容：把父类的九个参数全部转交，其中 `getValue` 和 `setValue` **两个都硬传 `null`**，`isRelatedToDifficultyPreset` / `onGetDifficultyPresetFromValue` / `onGetValueFromDifficultyPreset` 全传默认值；然后 `this._action = action`。

```csharp
public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState,
    Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)
    : base(identifier, priorityIndex, enableState, null, null, getIsDisabledWithReason, false, null, null)
{
    this._action = action;
}
```

**注意 `action` 参数没有 null 检查，而 `getIsDisabledWithReason` 是可选的**——写 `new ActionCampaignOptionData("X", 0, CampaignOptionEnableState.Enabled, null)` 编译得过，但 `ExecuteAction()` 会静默返回（下面解释）。

## 心智模型

**把它想成「给 `CampaignOptionData` 这条只有名字和优先级、没有值的记录，续上一个点击回调」。** 基类 [CampaignOptionData](../CampaignOptionData) 在构造器里就已经把 `Name` / `Description` 从 `GameTexts` 里按 `identifier` 查好了（`str_campaign_options_type` / `str_campaign_options_description`），所以本类**什么都不用管文案**——`identifier` 传对了，名字和描述自动就有了。

`GetDataType()` 返回 `CampaignOptionDataType.Action`。这是整个类与 UI 之间的唯一契约：**UI 靠这个返回值决定把这一行渲染成什么控件**。同一个列表里返回 `Boolean` 的会渲染成勾选框，返回 `NumericOption` 的会渲染成滑条。返回值错了，选项要么点不动要么显示成空控件。

`ExecuteAction()` 是全部逻辑，四行：

```csharp
public void ExecuteAction()
{
    Action action = this._action;
    if (action == null)
    {
        return;
    }
    action();
}
```

**这就是「无返回值、无日志、无异常」的三重静默**。UI 派发 `ExecuteCommand("ExecuteAction", new object[0])` 之后，如果构造时传了 null 委托，按钮点了什么也不会发生，你在日志里看不到任何线索。

官方自己怎么用它，[DefaultCampaignOptionsProvider](../DefaultCampaignOptionsProvider) 第 49、52 行给了两处：

```csharp
yield return new ActionCampaignOptionData("ResetTutorial", 10000, CampaignOptionEnableState.Enabled,
    new Action(this.ExecuteResetTutorial), null);
yield return new ActionCampaignOptionData("EnableCheats", 11000, CampaignOptionEnableState.Enabled,
    new Action(this.ExecuteEnableCheats), null);
```

**两处的 `priorityIndex` 是 10000 和 11000**——比常规选项大得多，所以它们会排在设置页面靠后的位置。这是「危险操作放最后」这个产品决定的实现方式。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public ActionCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Action action, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null)` | 五个参数全有名字、没有重载。`identifier` 决定文案；`priorityIndex` 决定排序（越大越靠后）；`enableState` 决定初始是否可点；`action` 是点击回调；`getIsDisabledWithReason` 返回 `Disabled` 时按钮灰掉并显示原因。**`action` 不校验 null。** |
| `GetDataType` | `public override CampaignOptionDataType GetDataType()` | 无条件返回 `CampaignOptionDataType.Action`。这是抽象方法，**每次被调用都重新构造不了也不缓存**，UI 与排序逻辑都会问它。返回常量，没有分支。 |
| `ExecuteAction` | `public void ExecuteAction()` | 按钮点击的落点。**无返回值**：成功就是成功，跑完就返回；`_action` 为 null 则直接 `return`，不抛异常也不打印。**不要写成 `if (ExecuteAction()) ...`，没有 bool 可接。** |

私有成员：`Action _action`。它是**非 readonly 的**——虽然没有任何方法重新赋值它，但字段声明确实没加 `readonly`。

## 真实示例

加一个自己的「重置战役提示」按钮：实现里让它只在特定条件下可点，这就是 `getIsDisabledWithReason` 的用法。**注意返回的 `CampaignOptionDisableStatus` 决定按钮是否灰掉，附带的 `TextObject` 决定鼠标悬停时显示的原因。**

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.ViewModelCollection;

// CampaignOptionsManager.Initialize() 会遍历 ModuleHelper.GetActiveGameAssemblies()
// 里所有实现了 ICampaignOptionProvider 的类型并 Activator.CreateInstance 它们。
// 所以只要这个类在 mod 的程序集里 public 且有无参构造器，就会被自动发现，无需注册。
public class MyCampaignOptionsProvider : ICampaignOptionProvider
{
    // GetGameplayCampaignOptions 产出的每一条都会进设置页；
    // 返回 null 是允许的（官方在另一侧返回 null 来跳过整个分类）。
    public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()
    {
        // identifier 决定文案：基类构造器会去查 str_campaign_options_type / _description。
        // priorityIndex 越大越靠后，所以 20000 表示排在官方 ResetTutorial(10000) 之后。
        // CampaignOptionDisableStatus 是 struct，不是枚举：
        // 第三个参数 valueIfDisabled 只对数值型选项有意义，Action 型可以不管。
        yield return new ActionCampaignOptionData(
            "ResetMyModFlags",
            20000,
            CampaignOptionEnableState.Enabled,
            new Action(ResetFlags),
            new Func<CampaignOptionDisableStatus>(GetDisableStatus));
    }

    public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()
    {
        return null;
    }

    private static CampaignOptionDisableStatus GetDisableStatus()
    {
        return new CampaignOptionDisableStatus(
            MyModState.Flags == 0,                       // IsDisabled
            "还没有可重置的内容",                        // DisabledReason
            -1f);                                       // ValueIfDisabled
    }

    private static void ResetFlags()
    {
        // 这就是 ExecuteAction 最终会执行的东西：没有返回值，没有异常契约。
        MBDebug.Print("重置 mod 标记");
        MyModState.Flags = 0;
    }
}

public static class MyModState
{
    public static int Flags;
}
```

**按钮被点到时 UI 走的是 `ViewModel.ExecuteCommand("ExecuteAction", ...)` 这条反射路径**（见 [ViewModel](../../core-extra/ViewModel)）：名字拼错、参数个数不对、类型转不过，三种错误都表现为「点了没反应」。调试时先自己 `new` 一条实例手调 `ExecuteAction()` 验证回调本身没坏。

## 风险与边界

- **`_action` 为 null 是静默失败。** 构造器不校验，`ExecuteAction` 也不抛。`ExecuteCommand` 派发失败同样静默（见 [ViewModel](../../core-extra/ViewModel) 的 `ExecuteCommand`）。排查时先直接 `new` 出来手调 `ExecuteAction()` 验证。
- **`getValue` / `setValue` 恒为 null。** 父类的取值 / 赋值路径（`GetValue()` / `SetValue(float)`）在这一行上没有意义。若 UI 逻辑误把它当数值项处理，会在 null 委托上炸掉——**所以 `GetDataType()` 必须返回 `Action`，这不是可选项**。[CampaignOptionDataType](../CampaignOptionDataType) 只有四个值：`Boolean` / `Numeric` / `Selection` / `Action`。
- **`getIsDisabledWithReason` 返回 null 会怎样，源码里没有兜底。** 它是 `Func<CampaignOptionDisableStatus>`，调用方要自己判。传 null 之前先确认你那条路径不会被取用。
- **[CampaignOptionDisableStatus](../CampaignOptionDisableStatus) 是 `struct` 不是枚举**：三个字段 `IsDisabled` / `DisabledReason` / `ValueIfDisabled`，构造器 `CampaignOptionDisableStatus(bool, string, float = -1f)`，两个属性都是 `private set`。没有 `Active` / `Disabled` 这样的枚举值可写。
- **`ExecuteAction()` 没有返回值。** 它不是 `bool` 也不是 `Task`，别按有返回值写。
- **每次调用 `GetDataType()` 都重新返回常量**，没有缓存，但也没有副作用——纯函数。
- **`priorityIndex` 完全由你决定**，官方没有区间约定。看到 10000/11000 这种大值只是官方自己的排序意图，不是「危险操作的阈值」。
- **`identifier` 拼错不会报错，只会让 `Name` / `Description` 变成查不到文本的显示。** 基类用的是 `GameTexts.FindText`，行为见 [GameTexts](../../core-extra/GameTexts)。
- **动作执行在 UI 线程同步发生。** 长耗时的工作会卡住设置界面。

## 跨版本提示

**这个类在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐行等价**：都是 35–36 行，都是三个 public 成员（构造器 + `GetDataType()` + `ExecuteAction()`），签名集合完全相同，行数差的 1 行是 1.3.15 之后 decompiled 排版把 `public ActionCampaignOptionData(...) : base(...)` 拆成了两行。

**跨版本风险不在本类身上，而在父类** [CampaignOptionData](../CampaignOptionData) 与选项容器 `CampaignOptions` 的枚举成员上：设置项的 `CampaignOptionDataType` 枚举值、以及 `CampaignOptionsManager` 接受的 provider 形状都可能新增分支。要在多版本上兼容，就只依赖本页这三个成员，别去实现父类里与难度预设相关的虚成员。

## 依赖关系

- 基类：[CampaignOptionData](../CampaignOptionData) 在构造器里按 `identifier` 解析 `Name` / `Description`，并声明抽象方法 `GetDataType()`
- 枚举契约：[CampaignOptionDataType](../CampaignOptionDataType) 决定 UI 渲染形态，[CampaignOptionEnableState](../CampaignOptionEnableState) 决定初始可用性
- 禁用原因：[CampaignOptionDisableStatus](../CampaignOptionDisableStatus)（struct，`IsDisabled` / `DisabledReason` / `ValueIfDisabled`）由 `getIsDisabledWithReason` 返回
- 消费方：[CampaignOptionsManager](../CampaignOptionsManager) 通过 `ModuleHelper.GetActiveGameAssemblies()` 自动发现并实例化 provider，再由 [CampaignOptionsVM](../CampaignOptionsVM) / [CampaignOptionsControllerVM](../CampaignOptionsControllerVM) 负责显示与派发
- 官方范例：[DefaultCampaignOptionsProvider](../DefaultCampaignOptionsProvider) 是本类在 1.3.0 里唯一的两处使用点
- UI 派发机制：[ViewModel](../../core-extra/ViewModel) 的 `ExecuteCommand(string, object[])` 是按钮点到 `ExecuteAction()` 的实际通路
- 桶首页：[viewmodel API 分区](../)
