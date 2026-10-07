---
title: "FormationQuerySystem"
description: "一支阵型的 46 项派生指标缓存：每个指标带独立的过期时间（0.2 秒到 15 秒不等），读「实时值」会触发重算，读「只读值」直接返回可能任意陈旧的缓存。命名有骗：GetCachedValueUnlessTooOld 根本不看年龄。"
---

# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## 概述

全文 764 行，一个 public 字段、46 个 `private readonly QueryData<T>` 私有字段、45 个 `ReadOnly` 只读属性、以及它们的 45 个同名孪生属性。它是「一支阵型派生出来的所有战斗指标」的唯一缓存层——步兵占比、骑兵占比、是否近战阵型、预计行进方向、预计展开间隔、局部友军战力、伤亡比、是否正遭远程压制、高地位置、最近的敌方大阵型，全部在这里。

每个阵型有一个实例，从 [Formation](../../mission/Formation/) 的属性上拿（`Formation.cs:241` 的 `public FormationQuerySystem QuerySystem { get; private set; }`）。

**核心机制是「每个指标一个独立的过期时间」。** 构造函数 `FormationQuerySystem.cs:309` 里为每个指标 new 一个 `QueryData<T>`，第二个实参就是它的存活秒数。实测分布：

| 存活时间 | 指标数 | 代表 |
| --- | --- | --- |
| 15s | 6 | 战场级判断（谁能打谁） |
| 10s | 5 | 敌方阵型定位 |
| 5s | 13 | 各种战力/比值 |
| 3s | 5 | 局部战力比 |
| 2.5s | 8 | 阵型战力（`FormationQuerySystem.cs:314`） |
| 0.2s | 2 | 预计方向（`FormationQuerySystem.cs:371`） |

## 心智模型

把它当成**「一支阵型的仪表盘」，而不是「一个阵型」**。四条推论：

第一，**每个指标都有一对孪生属性，区别是会不会触发重算。** 无后缀的那个（`FormationQuerySystem.cs:107` 的 `FormationPower`）走 `_formationPower.Value`，而 [QueryData](../QueryData/) 在发现过期时会真的去算。带 `ReadOnly` 后缀的那个（`FormationQuerySystem.cs:109`）走 `GetCachedValueUnlessTooOld()`——**直接返回缓存，一个字都不多问。** 45 对属性全部是这个形状。**在逐帧代码里读无后缀版本，就等于你亲手触发了那 46 个 lambda 里的一部分重算。**

第二，**`GetCachedValueUnlessTooOld` 的名字是假的。** 它的实现只有一句 `return _cachedValue;`，**完全不检查 `_expireTime`**。所以一个标着 15 秒存活期的指标，理论上可以返回一个已经过期很久的值。**所有只读属性的新鲜度完全靠调用方在合适的时候调作废方法**（`FormationQuerySystem.cs:681`），**类本身不兜底。**

第三，**空阵型会报告「我是步兵阵型」。** 判空发生在 `FormationQuerySystem.cs:740`，为真时走的不是求值而是直接写入。

被硬置成 true 的是步兵判定，写入点在 `FormationQuerySystem.cs:748`。**所以一支被清空的阵型，`IsInfantryFormation` 会返回 true。** 这是刻意的兜底（避免除零），不是 bug，但**你的 AI 逻辑不能拿它判断「这是步兵队」。**

第四，**过期是被外部驱动的，不是自动的。** `Expire()` 的调用点实测有 4 处，全部在阵型层与队伍层：见文末「依赖关系」。**你不调，它就一直是旧值。**

还有一条边界：`InitializeTelemetryScopeNames()`（`FormationQuerySystem.cs:756`）**是空的**，而且是 `private`。它存在的唯一可能就是被反编译器保留下来的遥测钩子——**里面什么都没有，不要指望它能帮你埋点。**

## 如何使用

**拿法：** 从 [Formation](../../mission/Formation/) 上取，不要 `new`：

```csharp
using TaleWorlds.MountAndBlade;

Formation myFormation = mission.MainTeam.GetFormation(FormationClass.Infantry);

if (myFormation == null)
{
    return;
}

FormationQuerySystem qs = myFormation.QuerySystem;   // 属性声明在 Formation.cs:241

// 无后缀：会触发重算
float power = qs.FormationPower;

// 带 ReadOnly：直接拿缓存，可能是很旧的
float powerStale = qs.FormationPowerReadOnly;
```

显式管理新鲜度（这是本类的正确用法）：

```csharp
using TaleWorlds.MountAndBlade;

public static float ReadFreshPower(Formation formation)
{
    FormationQuerySystem qs = formation.QuerySystem;

    // 先作废，再读无后缀版本 —— 这一读就会重算
    qs.Expire();                                   // 声明在 FormationQuerySystem.cs:681
    return qs.FormationPower;                      // 声明在 FormationQuerySystem.cs:107
}

public static float ReadCheapPower(Formation formation)
{
    // 逐帧路径：接受陈旧，换取零重算
    return formation.QuerySystem.FormationPowerReadOnly;   // 声明在 FormationQuerySystem.cs:109
}
```

按兵种构成打一个综合权重分（官方唯一的聚合入口）：

```csharp
using TaleWorlds.MountAndBlade;

// GetClassWeightedFactor 的实现见 FormationQuerySystem.cs:762：
//   步兵占比×infantryWeight + 远程占比×rangedWeight
// + 骑兵占比×cavalryWeight + 远程骑兵占比×rangedCavalryWeight
public static float ScoreFormation(Formation formation)
{
    FormationQuerySystem qs = formation.QuerySystem;

    // 注意它内部用的是【无后缀】的四个比例属性 —— 会触发重算。
    // 逐帧调用前先 Expire() 或改成自己读 ReadOnly 版本再手算。
    return qs.GetClassWeightedFactor(1f, 2f, 3f, 4f);
}
```

查敌方阵型定位类指标（存活期最长的一批）：

```csharp
using TaleWorlds.MountAndBlade;

public static void ReportEnemyFormationIntel(FormationQuerySystem qs)
{
    // 无后缀：触发重算
    FormationQuerySystem closest = qs.ClosestSignificantlyLargeEnemyFormation;

    // 带 ReadOnly：可能返回 null（cached value 本来就是 null）
    FormationQuerySystem fastest = qs.FastestSignificantlyLargeEnemyFormationReadOnly;

    // 注意 ReadOnly 版本在链尾多了一个 ?.QuerySystem，
    // 所以缓存为 null 时它返回 null 而不是抛异常
    MBDebug.Print("closest=" + (closest?.Formation?.FormationIndex.ToString() ?? "none")
                + " fastest=" + (fastest?.Formation?.FormationIndex.ToString() ?? "none"), 0);
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class FormationQuerySystem`（`FormationQuerySystem.cs:9`） | 无基类、无接口。构造函数是 public 手工 new 型的，但**正常路径应该走 `Formation.QuerySystem`**——直接 new 出来的实例没有任何东西会驱动它过期。 |
| `Formation` | `public readonly Formation Formation;`（`FormationQuerySystem.cs:11`） | **全类唯一的公开字段。** 所有 lambda 在构造时捕获它。它也是往回定位「这些数字属于哪支队」的入口。 |
| 46 个 `QueryData` 字段 | 例如 `private readonly QueryData<float> _formationPower;`（`FormationQuerySystem.cs:13`） | **全部 private**，外部只能通过属性访问。每个都带独立的存活秒数，在构造函数里 new。**这也是全类真正存储东西的地方——类自己没有任何数值字段。** |
| `Team` | `public TeamQuerySystem Team => Formation.Team.QuerySystem;`（`FormationQuerySystem.cs:105`） | **唯一不经过本地缓存的出口**，直接跳到队伍级查询系统。阵型级算不出的「全队对比」类问题走这里。 |
| `FormationPower` | `public float FormationPower => _formationPower.Value;`（`FormationQuerySystem.cs:107`） | 阵型总战力。走 `Value` —— **过期会触发重算**。存活期 2.5 秒（`FormationQuerySystem.cs:314`）。 |
| `FormationPowerReadOnly` | `public float FormationPowerReadOnly => _formationPower.GetCachedValueUnlessTooOld();`（`FormationQuerySystem.cs:109`） | **同一个值的零重算版本。** 全类 45 个 `ReadOnly` 属性都是这个形状。**返回值可能是任意年龄的旧值。** |
| `EstimatedDirection` | `public Vec2 EstimatedDirection => _estimatedDirection.Value;`（`FormationQuerySystem.cs:115`） | 预计行进方向。**存活期只有 0.2 秒**（`FormationQuerySystem.cs:371`），是全类最短的一档。算法在 `FormationQuerySystem.cs:316` 起，先算点积/叉积求角度、再比较正反两个旋转哪个更贴合实际位置。 |
| `EstimatedIntervalReadOnly` | `public float EstimatedIntervalReadOnly => _estimatedInterval.GetCachedValueUnlessTooOld();`（`FormationQuerySystem.cs:121`） | 预计展开间隔。配套的 lambda 从 `FormationQuerySystem.cs:372` 起，**它读的 `EstimatedDirection`（`FormationQuerySystem.cs:376`）本身也是个缓存**——所以这个指标依赖另一个可能已过期的指标。 |
| `LocalAllyUnits` | `public MBList<Agent> LocalAllyUnits => _localAllyUnits.Value;`（`FormationQuerySystem.cs:131`） | 局部友军单位列表。**返回的是内部列表的引用，不是拷贝**——外部改它会污染缓存。 |
| `MainClass` | `public FormationClass MainClass => _mainClass.Value;`（`FormationQuerySystem.cs:139`） | 阵型的主兵种类。lambda 在 `FormationQuerySystem.cs:598` 起。 |
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation`（`FormationQuerySystem.cs:275`） | 最近的那支「够大」的敌方阵型。**注意返回的是另一个 `FormationQuerySystem`，不是 Formation**——链式查询从这里开始。 |
| `FastestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormationReadOnly => _fastestSignificantlyLargeEnemyFormation.GetCachedValueUnlessTooOld()?.QuerySystem;`（`FormationQuerySystem.cs:301`） | 链尾多了一个 `?.QuerySystem`。**缓存为 null 时返回 null，不抛异常。** |
| `HighGroundCloseToForeseenBattleGround` | `public Vec2 HighGroundCloseToForeseenBattleGround => _highGroundCloseToForeseenBattleGround.Value;`（`FormationQuerySystem.cs:303`） | 预测战场附近的高地位置。 |
| `IsUnderCavalryChargeFromFront` | `public bool IsUnderCavalryChargeFromFront => _isUnderCavalryChargeFromFront.Value;`（`FormationQuerySystem.cs:307`） | **注意：它没有配对的 ReadOnly 版本**——这是 46 个指标里少数只出一个属性的那种。 |
| 构造函数 | `public FormationQuerySystem(Formation formation)`（`FormationQuerySystem.cs:309`） | **全文最长的一段**，把 46 个 lambda 全部装配起来。第一个装配的是 `formation.GetFormationPower`，存活 2.5 秒（`FormationQuerySystem.cs:314`）。 |
| `EvaluateAllPreliminaryQueryData` | `public void EvaluateAllPreliminaryQueryData()`（`FormationQuerySystem.cs:660`） | 一次性预热 11 个基础比例/类型判定。第一个求值在 `FormationQuerySystem.cs:663`，最后一个在 `FormationQuerySystem.cs:673`。**在批量读之前调它，能把后面 11 次读的重算成本摊成一次。** |
| `ForceExpireCavalryUnitRatio` | `public void ForceExpireCavalryUnitRatio()`（`FormationQuerySystem.cs:676`） | 单独作废骑兵比例一个指标（`:678`）。**存在这个单点函数说明骑兵比例被某个场景反复单独作废**——大概率是马匹数量变化频繁。 |
| `Expire` | `public void Expire()`（`FormationQuerySystem.cs:681`） | **全量作废。** 从 `FormationQuerySystem.cs:683` 开始逐个 `Expire()`，最后一个在 `FormationQuerySystem.cs:721`。**读无后缀属性之前调它，能保证你拿到的是当场重算的值。** |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()`（`FormationQuerySystem.cs:724`） | 增删单位后的专用失效。**与全量作废的关键区别：它在 `FormationQuerySystem.cs:740` 判断空阵型并直接写值兜底**，而不是重算。空阵型会把步兵判定置成 true（`FormationQuerySystem.cs:748`）。 |
| `InitializeTelemetryScopeNames` | `private void InitializeTelemetryScopeNames()`（`FormationQuerySystem.cs:756`） | **private + 空体。** 遥测钩子的残留，**没有任何行为**。 |
| `GetClassWeightedFactor` | `public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`（`FormationQuerySystem.cs:760`） | 唯一的聚合计算（`FormationQuerySystem.cs:762`）。四个权重是你给的，四个比例是内部算的。**因为四个比例属性是无后缀的，所以调它会触发重算。** |

## 真实示例

逐帧路径的安全写法（全程不触发意外重算）：

```csharp
using TaleWorlds.MountAndBlade;

public class MyModFormationWatcher : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        foreach (Formation formation in Mission.Current.AttackerTeam.FormationsIncludingSpecialAndEmpty)
        {
            FormationQuerySystem qs = formation.QuerySystem;

            // 逐帧：只读 ReadOnly 版本，零重算。
            // 声明在 FormationQuerySystem.cs:109 —— 名字里的 "UnlessTooOld" 是假的，
            // 它根本不检查年龄。
            float cachedPower = qs.FormationPowerReadOnly;

            // 确实需要新值时：显式作废再读
            qs.Expire();                       // 声明在 FormationQuerySystem.cs:681
            float freshPower = qs.FormationPower;   // 声明在 FormationQuerySystem.cs:107

            if (cachedPower > 0f && freshPower > cachedPower * 1.5f)
            {
                // 敌方阵型突然变强 => 可能来增援
            }
        }
    }
}
```

AI 决策前做一次「预热 + 一致快照」：

```csharp
using TaleWorlds.MountAndBlade;

public static FormationClass DecideCounterFormation(Formation enemy)
{
    FormationQuerySystem qs = enemy.QuerySystem;

    // 先把 11 个基础判定一次性算掉，后面连读 11 次不会重复触发
    qs.EvaluateAllPreliminaryQueryData();   // 声明在 FormationQuerySystem.cs:660

    // 现在这些读都是热的
    bool isRanged = qs.IsRangedFormation;
    bool isCavalry = qs.IsCavalryFormation;
    bool isInfantry = qs.IsInfantryFormation;

    if (isRanged && !isCavalry)
    {
        return FormationClass.Cavalry;
    }
    if (isInfantry)
    {
        return FormationClass.Ranged;
    }
    return FormationClass.Infantry;
}
```

小心空阵型这个坑：

```csharp
using TaleWorlds.MountAndBlade;

public static bool ReallyHasInfantry(Formation formation)
{
    FormationQuerySystem qs = formation.QuerySystem;

    // ⚠ 直接读 IsInfantryFormation 不可靠：
    //    FormationQuerySystem.cs:748 在空阵型时硬置 true
    if (formation.CountOfUnits == 0)
    {
        return false;   // 自己判一次
    }

    return qs.IsInfantryFormation;
}
```

跨阵型做全局对比（走 Team 层，不吃本地缓存）：

```csharp
using TaleWorlds.MountAndBlade;

public static Formation FindWeakestFormation(Mission mission)
{
    Formation weakest = null;
    float lowest = float.MaxValue;

    foreach (Formation formation in mission.DefenderTeam.FormationsIncludingSpecialAndEmpty)
    {
        if (formation.CountOfUnits == 0)
        {
            continue;
        }

        FormationQuerySystem qs = formation.QuerySystem;

        // 全局对比不要用本阵型的缓存结果，去队伍层问
        TeamQuerySystem teamQs = qs.Team;      // 声明在 FormationQuerySystem.cs:105

        // 团队级的战力是权威值；本阵型的 FormationPower 有最多 2.5 秒的延迟
        if (teamQs != null && formation.QuerySystem.FormationPowerReadOnly < lowest)
        {
            lowest = formation.QuerySystem.FormationPowerReadOnly;
            weakest = formation;
        }
    }

    return weakest;
}
```

## 风险与边界

- **`ReadOnly` 后缀不代表「一定新鲜」。** `GetCachedValueUnlessTooOld` 是一句 `return _cachedValue;`，**不检查年龄**（实现见 `QueryData.cs:73`）。要新鲜就自己 `Expire()`。
- **每次初始化过期时间是 0**（`QueryData.cs:41`）。**在第一次 `Evaluate` 之前读任何 `ReadOnly` 属性，你拿到的是 `default(T)`**——0、false、null，而不是「零值单位」。
- **无后缀属性会触发重算。** 46 个 lambda 里最长的那个（方向估算，从 `FormationQuerySystem.cs:316` 起）遍历全阵型单位做两遍循环。**逐帧读它就是逐帧全量遍历。**
- **空阵型报告自己是步兵阵型**（`FormationQuerySystem.cs:748`）。**必须自己先判 `CountOfUnits == 0`。**
- **过期是外部驱动的。** 不调 `Expire` 就永远是旧值。已知调用点有 4 处，逐个列在文末「依赖关系」里。
- **`LocalAllyUnits` 返回内部列表引用**（`FormationQuerySystem.cs:131`）。外部改它会污染缓存，而且下次过期重算时被覆盖。
- **`EstimatedDirection` 只有 0.2 秒存活期**（`FormationQuerySystem.cs:371`），是全类最短的一档，也是最贵的 lambda。
- **间隔指标依赖方向指标**（`FormationQuerySystem.cs:376` 读的是前者）。前者读到的是可能已经过期的方向——**两个指标之间没有一致性保证。**
- **两个敌方阵型定位属性返回的是查询系统而不是阵型本身**：最近的那支在 `FormationQuerySystem.cs:275`，最快的在 `FormationQuerySystem.cs:289`。**要拿阵型得再走一层 `.Formation`。**
- **ReadOnly 版本链尾有 `?.` 而无后缀版本没有**（`FormationQuerySystem.cs:301`）。**同一个语义、两种 null 行为**，写代码时容易混。
- **不是所有指标都有 ReadOnly 孪生。** `IsUnderCavalryChargeFromFront`（`FormationQuerySystem.cs:307`）就只有一个。**别假设「有 X 就一定有 XReadOnly」——逐个查。**
- **`GetClassWeightedFactor` 会触发四次重算**（`FormationQuerySystem.cs:762` 用的是四个无后缀属性）。批量评分前先 `EvaluateAllPreliminaryQueryData()`。
- **手工 `new FormationQuerySystem(formation)` 没有失效驱动。** 没有任何东西会替它调 `Expire`。
- **`InitializeTelemetryScopeNames` 是空的**（`FormationQuerySystem.cs:756`），别指望它能埋点。

## 依赖关系

- 本类：`FormationQuerySystem.cs:9` 类头、`:11` 唯一的公开字段
- 本类的唯一公开字段赋值：`FormationQuerySystem.cs:312`
- 46 个私有缓存字段的声明区：`FormationQuerySystem.cs:13` 到 `FormationQuerySystem.cs:103`（这一句指的都是同一个文件）
- 队伍级出口：`FormationQuerySystem.cs:105`
- 一对孪生属性的样板：`FormationQuerySystem.cs:107` 与 `FormationQuerySystem.cs:109`
- 最短存活期的那个 lambda：`FormationQuerySystem.cs:371`
- 构造函数装配区：`FormationQuerySystem.cs:309` 到 `:658`（这一句指的都是同一个文件）
- 预热与作废：`FormationQuerySystem.cs:660`、`:676`、`:681`、`:724`（这一句指的都是同一个文件）
- 聚合计算：`FormationQuerySystem.cs:760`
- 缓存容器：[QueryData](../QueryData/)，它的 `Value` 属性过期判断在 `QueryData.cs:23`
- 同一个容器上的求值：`Evaluate` 声明在 `QueryData.cs:57`，写入在 `QueryData.cs:62`（这一句指的都是同一个文件）
- 同一个容器上的两个只读取值：`GetCachedValueUnlessTooOld` 在 `QueryData.cs:73`，带年龄上限的变体在 `QueryData.cs:78`（这一句指的都是同一个文件）
- 同一个容器上的作废与同步组：`Expire` 在 `QueryData.cs:88`，`SetupSyncGroup` 在 `QueryData.cs:93`（这一句指的都是同一个文件）
- 宿主：[Formation](../../mission/Formation/) 的 `QuerySystem` 属性声明在 `Formation.cs:241`
- 队伍层对照：[TeamQuerySystem](../TeamQuerySystem/)
- 外部失效调用点之一：[Formation](../../mission/Formation/) 内的 `Formation.cs:740`
- 外部失效调用点之二：同一文件的 `Formation.cs:760`
- 外部失效调用点之三：同一文件的 `Formation.cs:1815`
- 外部失效调用点之四：[BattlePowerCalculationLogic](../BattlePowerCalculationLogic/) 的 `BattlePowerCalculationLogic.cs:54`
- 桶首页：[mission-ext API 分区](../)