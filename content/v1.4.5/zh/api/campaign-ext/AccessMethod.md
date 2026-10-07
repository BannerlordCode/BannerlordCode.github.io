---
title: "AccessMethod"
description: "定居点访问方式枚举：None（无访问权）、Direct（直接进入）、ByRequest（需申请进入）。定义在 SettlementAccessModel 中，用于描述玩家进入定居点的方式。"
---
# AccessMethod

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum AccessMethod`（嵌套于 `SettlementAccessModel`）  
**源文件：** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`AccessMethod` 是 `SettlementAccessModel` 内定义的嵌套枚举，用于描述玩家角色进入定居点的**方式**。它只有三个值：`None`（无访问权，无法进入）、`Direct`（可直接进入）、`ByRequest`（需要向守卫申请后才能进入）。

该枚举是 `AccessDetails` 结构体的一个字段（`SettlementAccessModel.cs:70`），由 `SettlementAccessModel` 的各个抽象方法（如 `CanMainHeroEnterSettlement`、`CanMainHeroEnterLordsHall`、`CanMainHeroEnterDungeon`）在计算访问结果时填充。mod 开发者通常**不直接操作**这个枚举，而是通过 `Campaign.Current.Models.SettlementAccessModel` 获取模型实例，调用其方法后从返回的 `AccessDetails` 中读取 `AccessMethod` 字段来判断玩家是否能进入某个定居点、以何种方式进入。

`SettlementAccessModel` 是一个抽象类（继承 `MBGameModel<SettlementAccessModel>`），引擎提供了默认实现 `DefaultSettlementAccessModel`。mod 可以通过替换模型实现来自定义定居点访问规则，此时需要在自己的实现中正确设置 `AccessDetails.AccessMethod` 字段。

## 心智模型

把这个枚举想成**定居点门口守卫的三种答复**：

1. **`None`**——守卫拒绝你进入。你站在门外，什么也做不了。对应 `AccessLevel.NoAccess`，通常意味着敌对关系、犯罪值过高或村庄已被洗劫。
2. **`Direct`**——守卫直接放行。你可以自由进出定居点的各个区域。对应 `AccessLevel.FullAccess`，通常意味着你是该定居点的盟友或统治者。
3. **`ByRequest`**——守卫说「你可以进，但得先打个招呼」。你需要通过对话选项请求进入，守卫同意后你才能踏入。对应 `AccessLevel.LimitedAccess`，通常意味着你与定居点所有者关系一般，或者你处于伪装状态。

这三个值与 `AccessLevel`（`NoAccess` / `LimitedAccess` / `FullAccess`）是**互补**关系：`AccessLevel` 描述「你能进多少」，`AccessMethod` 描述「你怎么进」。一个 `AccessDetails` 结构体同时携带这两个字段，mod 可以据此决定 UI 显示和逻辑分支。

枚举定义在 `SettlementAccessModel.cs:16-21`，是纯数据标记，不含任何方法或属性。它的值会被序列化保存（通过 `AccessDetails` 结构体的 `[SaveableField]` 特性），因此 mod 可以安全地在存档中持久化自定义的访问方式。

## 怎么用

### 怎么拿到

- **源树路径：** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`（共 92 行）
- **声明处：** `SettlementAccessModel.cs:16`（枚举声明）、`:18`（`None`）、`:19`（`Direct`）、`:20`（`ByRequest`）
- **运行时入口：** 通过 `Campaign.Current.Models.SettlementAccessModel` 获取模型实例，调用其方法后从 `AccessDetails` 中读取：

```csharp
SettlementAccessModel accessModel = Campaign.Current.Models.SettlementAccessModel;
AccessDetails details;
accessModel.CanMainHeroEnterSettlement(targetSettlement, out details);
AccessMethod method = details.AccessMethod;
```

### 典型用法

- **判断玩家能否进入定居点：** 调用 `CanMainHeroEnterSettlement` 后检查 `details.AccessMethod != AccessMethod.None`。
- **区分进入方式：** 如果 `AccessMethod.ByRequest`，mod 可以在 UI 中显示「请求进入」按钮；如果 `Direct`，直接放行。
- **自定义访问模型：** 继承 `SettlementAccessModel` 并重写抽象方法，在返回的 `AccessDetails` 中设置 `AccessMethod` 字段，然后通过 `Campaign.Current.Models` 替换默认实现。
- **监听访问状态变化：** 在 `CampaignEvents.Tick` 或行为中定期检查 `AccessDetails.AccessMethod`，当值从 `None` 变为 `Direct` 时触发自定义逻辑。

### 坑

- **`AccessMethod` 是值类型枚举，不是引用类型。** 比较时直接用 `==` 或 `!=`，不要使用 `ReferenceEquals`。
- **`AccessDetails` 是结构体（struct），不是类。** 传递时是值拷贝，修改返回的 `AccessDetails` 不会影响模型内部状态。
- **`SettlementAccessModel` 的抽象方法返回 `void`，结果通过 `out` 参数传出。** 调用前确保已声明 `AccessDetails` 变量。
- **默认实现 `DefaultSettlementAccessModel` 的访问规则基于关系值、犯罪值和派系状态。** mod 如果只改 `AccessMethod` 而不改 `AccessLevel`，可能导致 UI 显示不一致。

## 关键成员

### None

`AccessMethod.None`（`SettlementAccessModel.cs:18`）

无访问权。玩家无法进入定居点，守卫会拒绝任何进入请求。通常与 `AccessLevel.NoAccess` 配对出现，表示玩家与定居点处于敌对状态或存在其他不可逾越的障碍。

### Direct

`AccessMethod.Direct`（`SettlementAccessModel.cs:19`）

直接进入。玩家无需任何额外操作即可进入定居点及其内部区域。通常与 `AccessLevel.FullAccess` 配对出现，表示玩家是定居点的盟友、统治者或拥有足够高的关系值。

### ByRequest

`AccessMethod.ByRequest`（`SettlementAccessModel.cs:20`）

需申请进入。玩家必须通过对话选项向守卫请求进入，守卫同意后才能踏入定居点。通常与 `AccessLevel.LimitedAccess` 配对出现，表示玩家与定居点所有者关系一般，或玩家处于伪装状态需要额外验证。

### AccessDetails 结构体

`public struct AccessDetails`（`SettlementAccessModel.cs:66-79`）

承载访问计算结果的复合结构体，包含六个字段：`AccessLevel`（访问级别）、`AccessMethod`（访问方式）、`AccessLimitationReason`（限制原因）、`LimitedAccessSolution`（解决方案）、`PreliminaryActionObligation`（前置动作义务）、`PreliminaryActionType`（前置动作类型）。`AccessMethod` 是其中的第二个字段（`:70`），mod 通常同时读取 `AccessLevel` 和 `AccessMethod` 来做出完整判断。

## 真实示例

以下示例展示 mod 如何读取定居点访问模型，根据 `AccessMethod` 决定 UI 显示和交互逻辑：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Localization;

public static class SettlementAccessHelper
{
    public static string GetAccessDescription(Settlement settlement)
    {
        SettlementAccessModel accessModel = Campaign.Current.Models.SettlementAccessModel;
        AccessDetails details;
        accessModel.CanMainHeroEnterSettlement(settlement, out details);

        if (details.AccessMethod == AccessMethod.None)
        {
            return "无法进入：" + details.AccessLimitationReason.ToString();
        }
        else if (details.AccessMethod == AccessMethod.ByRequest)
        {
            return "需要申请进入";
        }
        else
        {
            return "可以自由进入";
        }
    }

    public static bool CanEnterDirectly(Settlement settlement)
    {
        SettlementAccessModel accessModel = Campaign.Current.Models.SettlementAccessModel;
        AccessDetails details;
        accessModel.CanMainHeroEnterSettlement(settlement, out details);
        return details.AccessMethod == AccessMethod.Direct;
    }
}
```

mod 也可以在自定义访问模型中重写逻辑，根据游戏状态动态设置 `AccessMethod`：

```csharp
public class CustomSettlementAccessModel : SettlementAccessModel
{
    public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
    {
        base.CanMainHeroEnterSettlement(settlement, out accessDetails);

        // 自定义规则：如果玩家是定居点所属派系的领袖，始终允许直接进入
        if (settlement.OwnerClan == Clan.PlayerClan)
        {
            accessDetails.AccessLevel = AccessLevel.FullAccess;
            accessDetails.AccessMethod = AccessMethod.Direct;
        }
    }
}
```

## 参见

- [SettlementAccessModel](../SettlementAccessModel) — 包含此枚举的抽象类，定义定居点访问规则的计算接口
- [AccessDetails](../AccessDetails) — 使用此枚举的结构体，承载访问计算的全部结果
- [AccessLevel](../AccessLevel) — 互补枚举，描述访问级别（无/有限/完全）
- [AccessLimitationReason](../AccessLimitationReason) — 限制原因枚举，解释为何无法进入

## 导航

- [本区域目录](../)
- **父级：** [campaign-ext API](../)
- **同级：** [AccessDetails](../AccessDetails) · [AccessLevel](../AccessLevel) · [AccessLimitationReason](../AccessLimitationReason)
- **相关：** [SettlementAccessModel](../SettlementAccessModel)
