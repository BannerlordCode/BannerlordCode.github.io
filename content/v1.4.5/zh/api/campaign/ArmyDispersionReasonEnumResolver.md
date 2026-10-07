---
title: "ArmyDispersionReasonEnumResolver"
description: "存档兼容层：把旧版本存档里 ArmyDispersionReason 的枚举名改写为新名，并给空串兜底成 Unknown，全文 20 行。"
---

# ArmyDispersionReasonEnumResolver

**Namespace:** `TaleWorlds.CampaignSystem.SaveCompability`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyDispersionReasonEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs`

## 概述

`ArmyDispersionReasonEnumResolver` 是**存档兼容层**里的一枚螺丝钉：它只有一个方法 `ResolveObject(string originalObject)`，作用是在读旧存档时把 `Army.ArmyDispersionReason` 的**旧枚举名改写成新名**。

它只做两件事，逻辑小到可以一眼看完：

1. **空值兜底。** `string.IsNullOrEmpty(originalObject)` 为真时，先 `Debug.FailedAssert("ArmyDispersionReason data is null or empty", ...)`，再返回 `Army.ArmyDispersionReason.Unknown.ToString()`。
2. **一次改名。** `originalObject.Equals("LowPartySizeRatio")` 为真时返回 `Army.ArmyDispersionReason.NotEnoughTroop.ToString()`；其余原样返回。

注意命名空间拼写：目录与类型都在 **`SaveCompability`**（Compatibility 的拼写错误），不是 `SaveCompatibility`。想找这个类必须按错拼写搜。

## 心智模型

把它当成**一张枚举改名对照表**，而不是一个可调用的工具。关键在于**谁调用它、什么时候调用**：

```csharp
AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver());
```

这一行在 `SaveableCampaignTypeDefiner`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:313`）。第三个参数就是 resolver。**它只在存档系统反序列化枚举时被问到，运行时代码永远碰不到它。** 所以：

- **不要在游戏逻辑里 `new ArmyDispersionReasonEnumResolver().ResolveObject(...)`。** 你的字符串本来就已经是新名，绕一圈没有意义。
- **它不缓存、不静态、无生命周期。** `SaveableCampaignTypeDefiner` 构造时 new 一个实例交给存档框架，之后由框架在每次解析该枚举时调用。你也无法替换它——`AddEnumDefinition` 那行是硬写的。
- **改名的方向是单向的。** `"LowPartySizeRatio"` → `NotEnoughTroop`。**没有反向映射**，即新名不会被改回旧名。这是对的——兼容层只服务「旧档 → 新代码」这一个方向。

第二个心智锚点是**改名这件事发生在游戏哪个版本**。`Army.ArmyDispersionReason` 在 1.4.5 里有 16 个成员，`LowPartySizeRatio` **不在其中**（当前叫 `NotEnoughTroop`）。也就是说这个 resolver 处理的是一个**已经发生过的历史改名**：1.4.5 之前的某个版本把 `NotEnoughTroop` 叫 `LowPartySizeRatio`，读那些旧存档时必须翻译。同理，[ArmyDispersionLogEntry](../ArmyDispersionLogEntry) 的 `GetEncyclopediaText()` 里有 `NotEnoughParty` 的专属文案但 `NotEnoughTroop` 落到 `_` 兜底——**枚举改名和文案覆盖是两件独立的事，不要指望改名后文案自动跟上。**

第三个锚点是**失败模式**。空串走 `FailedAssert` + 返回 `Unknown`，这是安全的降级。但**一个拼错的旧名不在兜底范围内**——它既不空也不等于 `"LowPartySizeRatio"`，会被原样返回，然后由存档框架去解析一个不存在的枚举名。这一步的结果取决于框架实现，`ResolveObject` 本身不做二次校验。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ResolveObject` | `public string ResolveObject(string originalObject)` | 接口 [IEnumResolver](../../save-system/IEnumResolver) 的唯一实现（该接口只有这一个方法）。空串→`Unknown.ToString()` 并断言；`"LowPartySizeRatio"`→`NotEnoughTroop.ToString()`；其它原样返回。**纯字符串函数，无副作用、无状态、不抛异常。** |

（`ArmyDispersionReasonEnumResolver` 只有一个成员、一张实现表，除此之外全部是 `internal static` 的存档脚手架，不在公开表面上。）

## 怎么用

这是存档兼容层里的枚举改名器，实例化本身没有价值，有价值的是它作为 `IEnumResolver` 被存档框架回调。读旧存档时框架把枚举名以字符串形式交回来，它要么返回新名字，要么原样返回。mod 作者通常不需要手动调用它，但只要你要往 `Army.ArmyDispersionReason` 上写新的枚举值，就必须知道这条改名链的存在。

**怎么拿到它**：声明在源树 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs:6`，命名空间目录拼作 `SaveCompability` 而不是 `SaveCompatibility`，这是游戏里的长期拼写错误，按正确拼写搜不到文件。挂载点是 `SaveableCampaignTypeDefiner.cs:313` 的 `AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver())`，第三个参数就是它。

想知道一条旧枚举名会落到哪个新值，把字符串喂给 `ResolveObject` 再解析回去就够了：

```csharp
ArmyDispersionReasonEnumResolver resolver = new ArmyDispersionReasonEnumResolver();
string oldValue = "LowPartySizeRatio";
Army.ArmyDispersionReason resolved = Enum.Parse<Army.ArmyDispersionReason>(resolver.ResolveObject(oldValue));
Debug.Print("旧名 " + oldValue + " 解析为 " + resolved, 0);
string fallback = resolver.ResolveObject(Army.ArmyDispersionReason.Unknown.ToString());
Debug.Print("原样透传 " + fallback + "，空值则会被兜底成 " + Army.ArmyDispersionReason.Unknown, 0);
```

实现只有两条分支，读起来比调用还短：`string.IsNullOrEmpty(originalObject)` 为真时先 `Debug.FailedAssert` 再返回 `Unknown.ToString()`；`originalObject.Equals("LowPartySizeRatio")` 为真时返回 `NotEnoughTroop.ToString()`；其余原样返回。纯字符串映射，没有查表也没有兜底枚举扫描，未命中的旧名会被直接透传给存档解析器。

**最常见的坑**：全文只处理 `"LowPartySizeRatio"` 这一个旧名，其余历史改名一概不在覆盖范围内。未命中的旧名被原样透传，然后由存档框架去解析一个不存在的枚举名，失败点离真正的原因很远。要覆盖更多改名只能改这个类，或者新增一个 resolver 并改 `SaveableCampaignTypeDefiner` 里那一行的第三个参数，而那一行是硬写的。

## 真实示例

这个类的正确用法是**在存档定义处挂载**，而不是手动调用。`SaveableTypeDefiner`（`Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`）是抽象类，构造器要 `int saveBaseId`，`AddEnumDefinition(Type type, int saveId, IEnumResolver enumResolver = null)` 是它的 **`protected`** 方法，只能写在 `protected override void DefineEnumTypes()` 里。`SaveableCampaignTypeDefiner` 就是这样一个子类（`base(330000)`），它正是官方挂载 resolver 的地方：

```csharp
public class MyCampaignTypeDefiner : SaveableTypeDefiner
{
    public MyCampaignTypeDefiner() : base(330000) { }

    protected override void DefineEnumTypes()
    {
        // 带 resolver：读旧存档时把旧枚举名翻译成新名（官方写法）
        AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver());

        // 不带 resolver 的同族写法，枚举名必须从未变过
        AddEnumDefinition(typeof(Army.ArmyTypes), 2021);
        AddEnumDefinition(typeof(MobileParty.PartyObjective), 2025);
    }
}
```

读旧存档后确认解析出来的解散原因落在合法枚举值内（枚举名被改写过，值得校验）：

```csharp
Army.ArmyDispersionReason reason = Army.ArmyDispersionReason.NotEnoughTroop;
string legacyName = "LowPartySizeRatio";
ArmyDispersionReasonEnumResolver resolver = new ArmyDispersionReasonEnumResolver();
string resolved = resolver.ResolveObject(legacyName);
Debug.Print(legacyName + " -> " + resolved + " parses=" + Enum.TryParse(resolved, out reason), 0);
```

空串兜底路径的行为确认（`FailedAssert` 在正式包里会被吞掉，返回值仍是 `Unknown`）：

```csharp
ArmyDispersionReasonEnumResolver resolver = new ArmyDispersionReasonEnumResolver();
Debug.Print("empty -> " + resolver.ResolveObject(string.Empty), 0);
Debug.Print("null  -> " + resolver.ResolveObject(null), 0);
Debug.Print("other -> " + resolver.ResolveObject("CohesionDepleted"), 0);
```

## 风险与边界

- **只有一条改名规则。** 全文仅处理 `"LowPartySizeRatio"` 一个旧名。**任何其它历史改名都不在覆盖范围内**——旧名会被原样透传，然后由存档框架去解析一个不存在的枚举名。要覆盖更多改名必须改这个类（或新增一个 resolver 并替换 `SaveableCampaignTypeDefiner` 里那一行的第三个参数，而那行是硬写的）。
- **命名空间拼写错误是 `SaveCompability`。** 按 `SaveCompatibility` 搜会找不到文件。这一点在 1.3.15 与 1.4.5 都成立，是长期拼写。
- **空串只降级不断言崩。** `Debug.FailedAssert` 在开发版会弹/打印，在正式发布包里被条件编译吞掉，返回 `Unknown` 继续。**不要指望它能帮你发现存档损坏。**
- **无法从外部替换。** `SaveableCampaignTypeDefiner` 那行 `AddEnumDefinition(..., 2023, new ArmyDispersionReasonEnumResolver())` 是硬编码的单例创建，没有工厂或 DI 挂钩。mod 想换掉它只能自己再调一次 `AddEnumDefinition` 用同一个 id 覆盖，或者去改 resolver 类本身。
- **只在读档时生效。** 运行期新写的枚举直接用当前名，不经过这里。所以「我在控制台打印 `ResolveObject("NotEnoughTroop")` 它原样返回」是正确行为，不是 bug。
- **无反向映射。** 只做旧→新，不做新→旧。序列化方向靠当前枚举名本身保证。
- **`ToString()` 依赖枚举名本身。** 返回值是 `Enum.ToString()`，枚举成员一旦再改名，resolver 的输出也跟着变——所以「修好 resolver 却忘了改枚举」会静默产出新错名。
- **类型极小，没有可继承的扩展点。** 全类型 20 行、1 个 public 方法、1 个 public 无参构造。要扩展只能改这个类本身或另写一个 `IEnumResolver`。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs` 是 21 行、1 个 public 成员（`ResolveObject`），实现 `TaleWorlds.SaveSystem.Resolvers.IEnumResolver`。1.4.6 同名文件公开表面一致。1.3.15 侧该命名空间下未见同名文件——resolver 机制本身在更早版本就存在，但 `ArmyDispersionReason` 的这条改名规则是随枚举改名一起引入的。

配套证据：`SaveableCampaignTypeDefiner.cs:313` 是全树唯一引用 `ArmyDispersionReasonEnumResolver` 的地方（阳性对照：同一行的 `Army.ArmyTypes`、`MobileParty.PartyObjective` 均为 0 引用的相邻 `AddEnumDefinition` 调用）。

## 依赖关系

- 接口：[IEnumResolver](../../save-system/IEnumResolver)（`Bannerlord.Source/bin/TaleWorlds.SaveSystem/Resolvers/IEnumResolver.cs`），全文只有一个 `string ResolveObject(string)` 方法
- **挂载点：`SaveableCampaignTypeDefiner` 的 `AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver())`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:313`）**
- 方法可见性：`AddEnumDefinition(Type, int, IEnumResolver = null)` 是 `SaveableTypeDefiner` 的 `protected` 成员，只能在 `SaveableTypeDefiner` 子类的 `protected override void DefineEnumTypes()` 里调用
- 被迁移的枚举：[Army](../Army) 嵌套的 `Army.ArmyDispersionReason`（1.4.5 共 16 个成员，旧名 `LowPartySizeRatio` 已不在其中）
- 消费方：[ArmyDispersionLogEntry](../ArmyDispersionLogEntry) 与 [ArmyDispersionMapNotification](../ArmyDispersionMapNotification) 各自 `SaveableField(30)` / `SaveableProperty(2)` 存这个枚举
- 诊断：[Debug](../../core-extra/Debug).FailedAssert 是空值兜底路径唯一可观测的信号，正式发布版会被吞
