---
title: "InformationManager"
description: "把消息、提示、Tooltip 与 Inquiry 请求转交给当前 UI 层的静态信息总线；它不保存业务状态，也不负责创建窗口。"
---
# InformationManager

**命名空间:** `TaleWorlds.Library`
**模块:** `TaleWorlds.Library`
**类型:** `public static class InformationManager`
**基类:** 无
**文件:** `bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## 概述

`InformationManager` 是游戏代码向信息 UI 发请求的静态桥。它把 `InformationMessage`、`InquiryData`、`TextInquiryData` 和 Tooltip 参数转发到已经订阅的 UI/ViewModel 回调；真正的消息列表、弹窗状态和 Gauntlet 视图由下游持有。调用它不会返回一个窗口对象，也不会替 mod 保存“当前提示”的业务状态。

## 心智模型

把它看成一条由引擎在 UI 生命周期中接线的单向总线：mod 只负责构造真实的数据并发出请求，TaleWorlds 的 UI 层负责消费请求、暂停游戏和执行回调。无论是主菜单还是进入战役/任务，只有对应 UI 消费者已经接线时才适合显示反馈、询问玩家或请求 Tooltip；模块卸载、没有消费者或不符合线程约定时，不应把它当作通用窗口服务。没有消费者时，大多数事件调用会安静地变成 no-op，状态查询则返回 `false`。

## ↑ 父级导航

- [Core-extra API 索引](../)
- [v1.4.5 架构与路线图](../../../architecture/roadmap)

## ↔ 同级导航

- [MBInformationManager](../MBInformationManager)：Core 层的快速信息、场景通知和多选 Inquiry 桥。
- [GameTexts](../GameTexts)：从游戏文本表取得本地化标题和按钮文字。
- [InformationMessage](../InformationMessage)：`DisplayMessage` 消费的消息值对象。

## Children / 相关入口

- [InquiryData](../InquiryData) - 带确认/取消 Action 的普通询问。
- [TextInquiryData](../TextInquiryData) - 带输入校验和字符串回调的文本询问。
- [TooltipBaseVM](../TooltipBaseVM) - 注册 Tooltip 时必须继承的 ViewModel 基类。
- [Campaign](../../campaign/Campaign) - 战役 UI 调用此总线显示决策、通知和工具提示。

## 依赖关系

上游是游戏模块在 UI 生命周期中给静态事件和 `IsAny*Internal` 委托接线；下游包括 [MBInformationManager](../MBInformationManager)、Campaign ViewModel 和 [TooltipBaseVM](../TooltipBaseVM) 消费者。`ShowInquiry` 的 `pauseGameActiveState` 与 `prioritize` 只随请求转发，暂停和排队策略由 UI 消费者决定。`RegisterTooltip<TRegistered, TTooltip>` 则把注册类型映射到 `TooltipBaseVM`、刷新委托和 movie 名称，`ShowTooltip` 再用注册类型作为字典键。

## 生命周期、线程与清理风险

- 所有 API 都是静态的，不要写 `new InformationManager()` 或寻找所谓的 `Current` 实例。
- `DisplayMessage`、`ShowTooltip`、`ShowInquiry` 和隐藏方法在对应事件没有订阅者时不会报错，但这不代表 UI 请求已显示；不要把它们当作成功回执。
- `Clear()` 是模块切换时的回调解绑操作。`Module` 的清理路径会调用它，但它不会清空 `RegisteredTypes`，也不会清空 `OnAddSystemNotification` 和 `IsAnyTooltipActiveInternal`；若 mod 自己接线，必须在自身卸载/重载路径解除订阅和 Tooltip 注册。
- `InformationMessage`、`InquiryData` 的 Action 可能在窗口稍后才执行。回调里不要捕获已经卸载的 ViewModel、Mission 或已死亡的实体；需要长期保存的数据应交给 Campaign/Save 系统。
- 这些事件会触碰 UI 消费者，调用时应遵循游戏已有的 UI 生命周期和线程约定；不要从后台线程直接操纵状态或假设弹窗能在存档/切换场景时完成。

## 公共成员如何工作

### 消息与系统通知

`DisplayMessage(InformationMessage message)` 只触发 `DisplayMessageInternal`；消息的 `Information`、`Detail`、`Color`、`Category` 和 `SoundEventPath` 由下游解释。`AddSystemNotification(string message)` 走另一条 `OnAddSystemNotification` 事件，不要用它替代需要颜色、分类或声音的 `InformationMessage`。`HideAllMessages()` 和 `ClearAllMessages()` 分别请求隐藏或清空下游消息视图。

### Inquiry 与状态查询

`ShowInquiry` 传递 `InquiryData`、暂停标志和优先级；`ShowTextInquiry` 传递 `TextInquiryData`，输入是否合法由 `TextInquiryData.TextCondition` 决定。`HideInquiry()` 只发隐藏请求。`IsAnyInquiryActive()` 在内部委托为空时返回 `false`，因此它只能回答“当前接线的 UI 是否报告有 Inquiry”，不能证明没有别的弹窗。

### Tooltip 注册与显示

`ShowTooltip(Type type, params object[] args)` 将类型和参数原样交给 Tooltip UI。源码中的真实调用会把 `typeof(MobileParty)`、`MobileParty` 实例以及扩展标志传进去；参数个数和含义必须与注册的 ViewModel 消费者一致。`RegisterTooltip<TRegistered, TTooltip>` 以 `typeof(TRegistered)` 为键写入 `RegisteredTypes`，同一键会覆盖旧记录；`UnregisterTooltip<TRegistered>` 找不到键时只打印调试信息。`GetIsAnyTooltipActive()` 与 `GetIsAnyTooltipActiveAndExtended()` 在回调为空时均返回 `false`。

## 真实示例

### 在战役 UI 中显示 MobileParty Tooltip

这是 Campaign ViewModel 使用的同一调用形态：先从 `MobileParty.MainParty` 取得真实对象，显示时传递目标类型和参数，离开悬停状态后明确隐藏。

```csharp
private void ShowMainPartyTooltip()
{
    if (MobileParty.MainParty != null)
    {
        InformationManager.ShowTooltip(typeof(MobileParty), MobileParty.MainParty, true, false);
    }
}

private void HideMainPartyTooltip()
{
    InformationManager.HideTooltip();
}
```

### 显示一个带真实本地化文本的确认框

`DefaultCampaignOptionsProvider` 等源码调用 `GameTexts.FindText` 和 `TextObject.ToString()` 后再构造 `InquiryData`。确认 Action 应该只做仍处于有效生命周期中的工作，并在执行真实操作后关闭或更新 UI。

```csharp
private void ShowResetConfirmation()
{
    InformationManager.ShowInquiry(
        new InquiryData(
            GameTexts.FindText("str_decision").ToString(),
            new TextObject("{=I2sZ7K28}Are you sure want to reset tutorials?").ToString(),
            true,
            true,
            GameTexts.FindText("str_yes").ToString(),
            GameTexts.FindText("str_no").ToString(),
            ResetTutorials,
            null),
        pauseGameActiveState: true,
        prioritize: true);
}

private void ResetTutorials()
{
    Game.Current.EventManager.TriggerEvent(new ResetAllTutorialsEvent());
    InformationManager.DisplayMessage(new InformationMessage(new TextObject("{=Iefr8Fra}Tutorials have been reset.").ToString()));
}
```

## 参见

- [Core-extra API 索引](../)
- [MBInformationManager](../MBInformationManager)
- [InformationMessage](../InformationMessage)
- [InquiryData](../InquiryData)
- [TextInquiryData](../TextInquiryData)
