# 死成员样本 · 独立手工复核（第二证据）

```
复核对象   tools/_HANDOFF.md §3.9 · worker-88 的 6 个样本
源码树     C:\WorkSpace\Bannerlord\bannerlord-1.4.5
SHA        ccbc3d40f88905765a1484492d41b7000e7249fa
分母       8,583 个 .cs 文件（find . -name '*.cs' | wc -l）
探针       ripgrep 15.1.0 + git-bash grep -rn/-w + read 肉眼核
本线纪律   不复用 worker-3 的 _deadmember.mjs；只用最朴素检索
```

## 探针有效性前置证据（阳性对照）

按 handoff §4 规则 1，**先证明检索本身有效**，再谈「0 命中」：

```
find . -name '*.cs' -type f | wc -l          → 8583      （与 §3.1 表里的 8,583 一致）
rg -w 'GarrisonParty' -g '*.cs' . | wc -l    → 135       （§7 推荐的阳性对照符号，非 0）
rg -w --count-matches 'GarrisonParty' ...    → 135
grep -rnw 'GarrisonParty' --include='*.cs' . → 135       （rg 与 grep 独立一致）
```

`GarrisonParty` 是 §7 指定的阳性对照（非 0），说明「rg / grep 在本树上能命中」。
**本文件里任何「0」都不再需要额外怀疑探针失效。**

另一个必须区分的量：`rg -n X | wc -l` = **命中行数**；
`rg --count-matches X | awk -F: '{s+=$NF}END{print s}'` = **命中次数**。
本树两者**不是恒等**——反例见「探针盲区 §B-7」。

---

## 样本 1 · `GetVirtualStageCount`

### 声明处

`Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:76`

```csharp
public abstract int GetVirtualStageCount();
```

### override（7 处）

| # | file:line |
|---|---|
| 1 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationBannerEditorView.cs:71` |
| 2 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationClanNamingStageView.cs:429` |
| 3 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationCultureStageView.cs:153` |
| 4 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationFaceGeneratorView.cs:86` |
| 5 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationNarrativeStageView.cs:412` |
| 6 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationOptionsStageView.cs:349` |
| 7 | `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.CharacterCreation/CharacterCreationReviewStageView.cs:353` |

7 个类的类头全部核过，确实继承自 `CharacterCreationStageViewBase`（肉眼读 `class X : CharacterCreationStageViewBase`）：

```
CharacterCreationBannerEditorView.cs:17   CharacterCreationFaceGeneratorView.cs:18
CharacterCreationCultureStageView.cs:24   CharacterCreationNarrativeStageView.cs:25
CharacterCreationClanNamingStageView.cs:26 CharacterCreationOptionsStageView.cs:27
CharacterCreationReviewStageView.cs:25
```

### 调用点：**0**

排除的 8 处「同名命中」——**全部是声明，没有一处是调用**：

```
rg -n 'GetVirtualStageCount' -g '*.cs' .   → 8 行
rg -n 'override int GetVirtualStageCount'  → 7 行
rg -n 'abstract int GetVirtualStageCount'  → 1 行
rg -n 'GetVirtualStageCount(' | grep -vE '(override|abstract) +int +GetVirtualStageCount'  → 空
```

| 命中 | 排除理由 |
|---|---|
| `StageViewBase.cs:76` | `public abstract int GetVirtualStageCount();` —— **抽象基类声明**，无 `(` 后的实参，是声明不是调用 |
| 其余 7 行 | `public override int GetVirtualStageCount()` —— **override 定义签名**，同样不是调用 |

非 `.cs` 文件里 0 命中（`rg -n 'GetVirtualStageCount' -g '!*.cs' .` → 空），所以没有 XML 文档 / 字符串 / 资源文件命中。

### 结论：**MISMATCH**

```
handoff   8 处 override / 0 调用点
我的      7 处 override / 1 处 abstract 声明 / 0 调用点
差异原因  第 8 处是 CharacterCreationStageViewBase.cs:76 的【抽象基类声明】，
          不是 override。handoff §3.9 自己的输出格式
          「成员名 | 声明 file:line | override 数 | 调用点数」把「声明」和
          「override」分成两列，所以把声明算进 override 数是口径错误，
          不是 7 和 8 的偶发差。
「0 调用点」CONFIRMED —— 这是本样本最有价值的部分，原样成立。
```

---

## 样本 2 · `BoardGameAIBase.AIDecisionDuration = 1.5f`

### 声明处

`Modules.SandBox/SandBox/SandBox.BoardGames.AI/BoardGameAIBase.cs:21`

```csharp
private const float AIDecisionDuration = 1.5f;
```

类型声明 `BoardGameAIBase` 在同文件 `BoardGameAIBase.cs:9`（`public abstract class BoardGameAIBase`）。

### override：无（`const` 不能被 override，无此概念）

### 调用点：**0**

```
rg -n 'AIDecisionDuration' -g '*.cs' .                → 1 行
rg --count-matches 'AIDecisionDuration' ...           → 1 次
```

全树 1 处命中，就是声明本身。排除理由：声明行，无第二个命中可排除。

**「调用点写的是字面量 1.5f」——阳性证据存在，handoff 这半句 CONFIRMED：**

`BoardGameAIBase.cs:148`，在 `CanMakeMove()` 里：

```csharp
public bool CanMakeMove()
{
    if (State == AIState.Done)
    {
        return _aiDecisionTimer >= 1.5f;     // ← :148  字面量，没用 AIDecisionDuration
    }
    return false;
}
```

配套的计时器字段也全在同文件，5 处使用，**没有一处读那个常量**：

```
BoardGameAIBase.cs:27   private float _aiDecisionTimer;        声明
BoardGameAIBase.cs:110  return _aiDecisionTimer;              读
BoardGameAIBase.cs:115  _aiDecisionTimer += dt;                写
BoardGameAIBase.cs:140  _aiDecisionTimer = 0f;                 写
BoardGameAIBase.cs:148  return _aiDecisionTimer >= 1.5f;       读（常量被绕过）
```

### 结论：**CONFIRMED**

```
handoff   声明后零引用（调用点写的是字面量 1.5f）
我的      完全一致：1 处命中 = 1 处声明，引用 0；BoardGameAIBase.cs:148 确为字面量 1.5f
补强      private const → 外部程序集在 C# 层面根本无法引用它，
          「0 引用」的成因是可见性，不是「modder 会踩的坑」。
          文档价值在于「同文件里 const 与字面量并存、const 被自己的调用点绕过」。
```

---

## 样本 3 · `CampaignMusicHandler.Min/MaxRestDurationInSeconds`

### 声明处

`Modules.SandBox/SandBox.View/SandBox.View/CampaignMusicHandler.cs`

```
:14   private const float MinRestDurationInSeconds = 30f;
:16   private const float MaxRestDurationInSeconds = 120f;
```

类型声明 `CampaignMusicHandler` 在同文件 `:12`（`public class CampaignMusicHandler : IMusicHandler`）。

### override：无（`const`）

### 调用点：**0**

```
rg -n 'RestDurationInSeconds' -g '*.cs' .   → 2 行
rg -n 'MinRestDuration' ...                  → 1 行
rg -n 'MaxRestDuration' ...                  → 1 行
```

全树 2 处命中，两处都是声明。没有同名噪声需要额外排除。

**「TickCampaignMusic 里写的是 30f + rand*90f」——阳性证据 CONFIRMED：**

`CampaignMusicHandler.cs:68`，在 `TickCampaignMusic(float dt)` 内：

```csharp
else if (!flag)
{
    MBMusicManager.Current.ForceStopThemeWithFadeOut();
    _restTimer = 0f - (30f + MBRandom.RandomFloat * 90f);   // ← :68
    Debug.Print("Campaign music rest started.", 0, (DebugColor)9, 64uL);
}
```

**这是 6 个样本里语义等价最干净的一个**，值得写进文档：

```
常量声明的语义   [Min=30f, Max=120f]，闭区间 30~120 秒
实际写法的语义   30f + rand*90f，rand ∈ [0,1) → 实际区间 [30, 120)，**上界开区间**
差异            120 那一端在 rand 恰好为 1 时取不到（概率为 0，实际等价）
也就是说      这不是「写错了」，是「值被拆成两个字面量复制了一遍」——
              想改静默期必须同时改 :14、:16、:68 三处，且 :68 那处没有任何注释指回 :16。
```

### 结论：**CONFIRMED**

```
handoff   声明后零引用（TickCampaignMusic 写 30f+rand*90f）
我的      完全一致：2 处命中 = 2 处声明，引用 0；:68 确为 30f + MBRandom.RandomFloat * 90f
差异原因  无
补强      同样本 2，均为 private const，可见性导致的 0 引用；
          价值点是「同一语义在 :14/:16/:68 复制了三份」
```

---

## 样本 4 · `ArmyTypes.NumberOfArmyTypes`

### 声明处

`bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs:28`

```csharp
public enum ArmyTypes          // ← :22
{
    Besieger,                 // ← :24
    Raider,                   // ← :25
    Defender,                 // ← :26
    Patrolling,               // ← :27
    NumberOfArmyTypes         // ← :28
}
```

### override：无（枚举成员）

### 调用点：**0**

```
rg -n 'NumberOfArmyTypes' -g '*.cs' .             → 1 行
rg --count-matches 'NumberOfArmyTypes' ...        → 1 次
rg -n 'NumberOfArmyTypes' -g '!*.cs' .           → 空
grep -rn 'NumberOfArmyTypes' .  | wc -l          → 1
```

全树（含非 `.cs`）1 处命中，就是声明本身。

### 结论：**CONFIRMED**

```
handoff   全树仅出现一次
我的      全树 1 次命中 / 1 行 / 1 个文件 / 1 个位置 = Army.cs:28，且该处就是声明
差异原因  无
必须一起写进文档的边界（handoff §3.1 精神）
          「出现 1 次」= 「声明 1 次 + 引用 0 次」，不是「被引用了 1 次」。
          表述含糊会让人读成后者。
          并且这 1 处是【枚举哨兵成员】（最后一个成员 = 成员计数），
          0 引用是 C# 惯用法的一部分，不是死成员。
          把它和样本 1/2/3 放进同一张表而不加区分，就是伪发现。
```

---

## 样本 5 · `ArmyTypes.Patrolling`

### 声明处

`bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs:27`

### override：不适用（枚举成员）

### 调用点：**0**

`rg -n -w 'Patrolling' -g '*.cs' .` 全树 **6 行**，逐条分类：

| file:line | 内容 | 判定 |
|---|---|---|
| `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs:27` | `Patrolling,` | **本成员声明**（`Army.ArmyTypes` 第 4 个成员） |
| `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs:205` | `Patrolling,` | 排除：**另一个枚举** `Agent.WatchState`（`Agent.cs:203 public enum WatchState`，成员 `Patrolling/Cautious/Alarmed`） |
| `.../Agent.cs:1059` | `_ => WatchState.Patrolling,` | 排除：同上，`WatchState` 的取值 |
| `.../Agent.cs:1066` | `case WatchState.Patrolling:` | 排除：同上，`WatchState` 的 switch 分支 |
| `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobileParty.cs:2547` | `new TextObject("{=BifGz0h4}Patrolling.")` | 排除：**本地化字符串字面量**，是给人看的英文单词，不是枚举成员引用 |
| `.../MobileParty.cs:2552` | `"...Heading to patrol around {TARGET_SETTLEMENT}."` 所在行（同行含 "Patrolling" 分支） | 排除：同上，`TextObject` 字符串字面量 |

所以：**6 处同名命中里，引用 `Army.ArmyTypes.Patrolling` 这个值的有 0 处。**

更硬的旁证——枚举成员的取值分布（`rg -o 'ArmyTypes\s*\.\s*\w+'` 去空格后 uniq -c）：

```
27  ArmyTypes.Besieger
23  ArmyTypes.Raider
23  ArmyTypes.Defender
 0  ArmyTypes.Patrolling
```

`rg -n 'ArmyTypes\s*\.\s*Patrolling'` → 0 行。三个兄弟成员共 73 处取值引用，第四个是 0。

### 关于 handoff 的「58」

我用 9 种口径都试过，没有一种得到 58：

```
rg -n -w 'Patrolling'            → 6 行 / 6 次
rg -n  'Patrolling'（子串）      → 112 行 / 132 次
rg -n -i 'patrolling'            → 139 行 / 160 次
rg -n -i 'patrol'                → 564 行 / 775 次
rg -n -w -i 'patrol'             → 16 行 / 17 次
rg -n -w 'Patrol'                → 6 行 / 6 次
rg -n -w 'ArmyTypes'             → 73 行
rg -n 'ArmyTypes\.Patrolling'    → 0 行
grep -rnw 'Patrolling' --include='*.cs' .  → 6 行
```

跨版本也扫过（`Patrolling` 词边界，6 棵树）：

```
1.3.0   6 行     1.4.6   23 行
1.3.15  6 行     1.4.7   23 行
1.4.5   6 行     1.5.3   23 行
```

六棵树里没有一棵给出 58。**「58」我复现不出来，也拿不出它是怎么来的。**

### 结论：**MISMATCH（数字）/ 实质 CONFIRMED**

```
handoff   58 处引用但无一涉及该值
我的      同名命中 6 处（1 声明 + 3 个 Agent.WatchState.Patrolling + 2 个本地化字符串），
          引用 Army.ArmyTypes.Patrolling 这个值的 0 处
「无一涉及该值」CONFIRMED —— 6/6 逐条肉眼分类，站得住
「58」MISMATCH —— 9 种口径 + 6 棵树都复现不出，我给不出差异原因，只能标注不可复现
盲区      见 §B-2（同名的另一个枚举）与 §B-3（字符串字面量）。
          「58」极可能是把 WatchState.Patrolling / 字符串 / 更宽的 patrol 子串
          一并计入的产物，但这是推测，不作为结论。
```

---

## 样本 6 · `AgeModel.MiddleAdultHoodAge`

### 声明处

`bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs:17`

```csharp
public abstract class AgeModel : MBGameModel<AgeModel>   // ← :5
{
    ...
    public abstract int MiddleAdultHoodAge { get; }        // ← :17
```

### override（1 处）

`bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAgeModel.cs:41`

```csharp
public override int MiddleAdultHoodAge => 35;
```

（同文件兄弟 override 紧邻：`:33 BecomeInfantAge => 3`、`:35 BecomeChildAge => 6`、`:37 BecomeTeenagerAge => 14`、`:39 HeroComesOfAge => 18`、`:43 BecomeOldAge => 55`、`:45 MaxAge => 128`）

### 调用点：**3 处**（handoff 说 1 处）

```
rg -n 'MiddleAdultHoodAge' -g '*.cs' .   → 5 行
rg -n 'override int MiddleAdultHoodAge'  → 1 行   （DefaultAgeModel.cs:41）
grep -rnw 'MiddleAdultHoodAge' --include='*.cs' .  → 5 行（与 rg 独立一致）
```

5 处命中的分类：

| file:line | 内容 | 判定 |
|---|---|---|
| `AgeModel.cs:17` | `public abstract int MiddleAdultHoodAge { get; }` | 排除：抽象声明 |
| `DefaultAgeModel.cs:41` | `public override int MiddleAdultHoodAge => 35;` | 排除：override 实现 |
| `CampaignBehaviors/BackstoryCampaignBehavior.cs:45` | `hero.Age < (float)Campaign.Current.Models.AgeModel.MiddleAdultHoodAge` | **调用点 1**（属性读） |
| `CampaignBehaviors/BackstoryCampaignBehavior.cs:52` | `item.Age < (float)Campaign.Current.Models.AgeModel.MiddleAdultHoodAge` | **调用点 2**（属性读） |
| `Helpers/HeroHelper.cs:291` | `int middleAdultHoodAge = Campaign.Current.Models.AgeModel.MiddleAdultHoodAge;` | **调用点 3**（属性读，handoff 只数到了这一处） |

`HeroHelper.cs:291` 的下游确实用上了（`DefaultRelation` 方法内，同文件 `:296` 与 `:300`）：

```csharp
public static int DefaultRelation(Hero hero, Hero otherHero)          // :289
{
    int middleAdultHoodAge = Campaign.Current.Models.AgeModel.MiddleAdultHoodAge;   // :291
    ...
    if (... && hero.Age > (float)middleAdultHoodAge && otherHero.Age > (float)middleAdultHoodAge
        && NPCPersonalityClashWithNPC(hero, otherHero) > 40)                            // :296
        return -5;
    if (... && hero.Age > (float)middleAdultHoodAge && otherHero.Age > (float)middleAdultHoodAge)  // :300
```

`BackstoryCampaignBehavior.cs` 的两处也在真实判断里（`:45` 与 `:52`，各控制一条
`CharacterInsultedLogEntry` 的写入）。

**这 3 处都是属性读，没有 `(`。** 任何形如「调用点 = `.Name(`」的探针会把这 3 处全部漏掉，
只留下「抽象声明 1 + override 1」两个命中——handoff §5 已登记 anti-fabrication 有同一个病
（「`identifiersInBlock` 只识别 `.Foo(` / `.Foo<` / `new Type` → 纯属性读取不抽取」）。
`MiddleAdultHoodAge` 恰好是纯属性，**这个已知假阴性正好命中本样本**。

### 结论：**MISMATCH**

```
handoff   仅 HeroHelper.cs:291 一个引用点
我的      3 个引用点：HeroHelper.cs:291 · BackstoryCampaignBehavior.cs:45 · :52
差异原因  探针按「.Name(」算调用点，纯属性读取 `.Name` 全部漏检。
          BackstoryCampaignBehavior.cs 的两处是
          `hero.Age < (float)Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`
          —— 属性读，无括号。
          按该口径全树只剩 2 个命中（声明 + override），但 handoff 记的是 1，
          说明它连 override 也一并扣掉了。三处差异的成因是探针口径，不是源码。
反过来说   「MiddleAdultHoodAge 是死成员」这个结论【不成立】，
          它有 1 个 override + 3 个真实调用点，是正常在用的模型成员。
          若按 handoff 原稿写进文档，会把一个活成员误标成死成员。
```

---

## 汇总表

| # | 样本 | handoff 声称 | 我的数字 | 判定 | 差异原因 |
|---|---|---|---|---|---|
| 1 | `GetVirtualStageCount` | 8 override / 0 调用点 | **7 override + 1 abstract 声明 / 0 调用点** | **MISMATCH** | 第 8 处是 `CharacterCreationStageViewBase.cs:76` 的抽象基类声明，不是 override。handoff 自己的输出格式把「声明」和「override」分列，口径混了。「0 调用点」CONFIRMED |
| 2 | `BoardGameAIBase.AIDecisionDuration` | 声明后零引用，调用点写字面量 1.5f | **1 命中 = 1 声明，0 引用；`BoardGameAIBase.cs:148` 确为字面量 `1.5f`** | **CONFIRMED** | 无 |
| 3 | `CampaignMusicHandler.Min/MaxRestDurationInSeconds` | 声明后零引用，TickCampaignMusic 写 `30f+rand*90f` | **2 命中 = 2 声明，0 引用；`CampaignMusicHandler.cs:68` 确为 `30f + MBRandom.RandomFloat * 90f`** | **CONFIRMED** | 无 |
| 4 | `ArmyTypes.NumberOfArmyTypes` | 全树仅出现一次 | **1 次命中 / 1 行 / 1 文件 = `Army.cs:28`，该处即声明；非 `.cs` 亦 0** | **CONFIRMED** | 无。补：应表述为「声明 1 次 + 引用 0 次」，且这是枚举哨兵成员 |
| 5 | `ArmyTypes.Patrolling` | 58 处引用但无一涉及该值 | **同名命中 6 处（1 声明 + 3 × `Agent.WatchState.Patrolling` + 2 × 本地化字符串）；引用该值 **0** 处；`ArmyTypes.X` 取值分布 Besieger 27 / Raider 23 / Defender 23 / Patrolling 0** | **MISMATCH（数字）/ 实质 CONFIRMED** | 「无一涉及该值」站得住（6/6 逐条分类）。「58」用 9 种口径 + 6 棵树都复现不出，差异原因不可考 |
| 6 | `AgeModel.MiddleAdultHoodAge` | 仅 `HeroHelper.cs:291` 一个引用点 | **1 抽象声明 + 1 override（`DefaultAgeModel.cs:41`）+ 3 引用点（`HeroHelper.cs:291` / `BackstoryCampaignBehavior.cs:45` / `:52`）** | **MISMATCH** | 探针把「调用点」定义成「`.Name(`」，3 处纯属性读全漏。**该成员不是死成员**，按原稿发布会把活成员误标 |

**合计：CONFIRMED 3 · MISMATCH 3 · UNSUPPORTED 0。**

但要连着读下面这句话：**3 个 CONFIRMED 里没有 1 个是「面向 modder 的坑」**——
样本 2、3 是 `private const`，外部程序集在 C# 层面根本无法引用；样本 4 是枚举哨兵。
样本 6 干脆推翻了死成员判定。**6 个样本真正站得住的 modder 价值点只有样本 1
（一个 public abstract 成员 + 7 个 override，引擎自己一次都没调），
而样本 1 的 override 数还得从 8 改成 7。**

---

## 本线已知的探针盲区（工具必须处理）

按在本任务中实际撞到的顺序。全部来自本文件的实测，不是推测。

### B-1 「成员名出现 N 次」≠「被引用 N 次」，而 handoff 的写法把两者混成一句话

样本 4 的原始表述是「全树仅出现一次」。这句话可以读成
「被引用了一次」（错，引用是 0）或「只出现在一个地方，即声明」（对）。
**工具必须分开输出三个量**：`声明数` / `引用数` / `排除数（+ 逐条排除理由）`，
不允许合并成一个「出现次数」。§3.9 定的格式 `声明 file:line | override 数 | 调用点数`
已经是对的，但样本 1 和样本 4 的实际填写都退化了。

### B-2 同名成员属于不同类型，纯名字匹配必然串味

`Army.ArmyTypes.Patrolling` 与 `Agent.WatchState.Patrolling` 同名。
`-w 'Patrolling'` 把两者一起捞出来（6 处里 3 处是后者）。
**工具必须做类型归属判定**：先定位声明的类型（这里靠 `Army.cs:22 enum ArmyTypes`），
再判定引用点是否解析到同一个类型。做不到类型判定，就至少要在报告里
把「无法判定归属」单独标成一类，不能静默合并计数。

### B-3 本地化字符串字面量里含有人类可读的英文单词

`MobileParty.cs:2547` / `:2552` 的 `new TextObject("{=BifGz0h4}Patrolling.")` 是要显示给玩家的
英文句子，不是枚举取值。任何纯文本匹配都会把它们算进来。
**工具必须区分「代码标识符位置」与「字符串字面量 / 注释 / XML 文档位置」**，
并把后者的排除理由写进报告（本文件已逐条列出，可作对照）。

### B-4 `abstract` 声明会被当成 `override`

样本 1：`public abstract int GetVirtualStageCount();` 与 `public override int GetVirtualStageCount()`
长得几乎一样。按成员名匹配、或匹配 `<修饰符> int <Name>` 这类模式，会把声明并入 override。
**工具必须按 `abstract` / `override` / `virtual` / 无修饰符（隐式 override）四个桶分类**。
本样本 8 vs 7 的差异就是这么来的。

### B-5 属性读没有 `(`，「调用点 = `.Name(`」会漏掉整个属性类成员

样本 6 是最直接的例子：`Campaign.Current.Models.AgeModel.MiddleAdultHoodAge`
是属性读，3 处全被漏。handoff §5 已经登记 anti-fabrication 有这个病，
但死成员工具如果复用同一套 `identifiersInBlock` 逻辑，会原样继承。
**死成员工具必须把 `.Name`（裸读）与 `.Name(`（调用）分开统计**，
并且本树里两类都必须报，不能只报一类。

### B-6 反射会消费枚举成员，文本探针完全看不见 —— 这是会直接推翻结论的盲区

`bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:312`

```csharp
AddEnumDefinition(typeof(Army.ArmyTypes), 2021);
```

全树有 72 处 `AddEnumDefinition`。枚举注册后按**底层整数值**序列化，
成员名在源码里一次都不会出现。**这意味着「`ArmyTypes.Patrolling` 0 引用」
这个结论只对「源码里显式写了 `ArmyTypes.Patrolling` 的地方」成立，
不对「运行时会不会碰到这个值」成立** —— 老存档里存着 `Patrolling` 是完全可能的。

样本 4 同理：`NumberOfArmyTypes` 作为哨兵成员 0 引用，是 C# 惯用法，不是死成员。

**工具规则：任何枚举成员报「0 引用」之前，必须先检查它的 `typeof(所在枚举)`
有没有出现在 `AddEnumDefinition` / `Enum.GetValues` / `Enum.Parse` 之类位置；
检到就降级为「UNSUPPORTED（序列化/反射不可见）」，不许报 CONFIRMED。**
我这一条之所以敢给 CONFIRMED（样本 4），是因为该枚举确实被 `typeof` 注册了但
成员名 `NumberOfArmyTypes` 属于哨兵惯用法、不可能被反序列化命中；
`Patrolling` 则相反——它是一个**真实可能的存档值**，0 引用的成因至少部分在探针盲区里。

### B-7 命中行数 ≠ 命中次数

`rg -n X | wc -l` 数行，`rg --count-matches X` 数次。本树两者会分叉——
`Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentStatCalculateModel.cs`
的 `1.5f` 是 **3 次 / 2 行**。
本文件里 6 个样本恰好两者相等（8/8、1/1、2/2、1/1、6/6、5/5），所以没受影响，
但这是**运气，不是工具保证**。
**工具必须显式声明自己报的是行数还是次数，两者不等时必须都报。**

### B-8 本树是 ILSpy 反编译产物，不是原始源码

`bannerlord-1.4.5/README.md`：

```
Decompiled C# source of Mount & Blade II: Bannerlord (Steam, version 1.4.5),
generated with ilspycmd 10.1.0 (-p project mode).
```

实测：8,583 个 `.cs` 里 **1,827 个带 `//IL_` 编译期标注**（反编译器的产物，不是人写的注释）。
后果，对工具的硬约束：

- **没有原始 XML 文档**——实测 `find . -name '*.xml'` = 0 个。
  所以「没找到 XML 文档」在本树里是恒真命题，**不能作为「原版也没文档」的证据**。
- 反编译器会重命名局部变量（`num`、`num2`、`val`、`flag`）、会内联会折叠、
  会在类型无法解析时留 `Unknown result type`（`BoardGameAIBase.cs:47-51`、
  `CampaignMusicHandler.cs:49-53`，两处都在方法体开头堆了 5~6 条）。
  源码里没有的一行，可能是反编译器丢的，也可能是本来就没有。
- 因此「本树 0 引用」这句话的主语必须是**这棵树**，
  绝不能升级成「该 API 无调用方」这种关于游戏的断言（handoff §3.1 的规矩，
  在死成员这条线上同样成立，而且更容易违反——因为死成员的结论形式就是「没人用它」）。

### B-9 可见性决定了「0 引用」的信息量，工具必须报可见性

样本 2、3 的两个成员都是 `private const float`。
C# 里 `private const` **外部程序集根本无法引用**，所以「0 引用」是语言层面的必然，
不是「modder 会不小心绕开它」。
样本 1 的 `public abstract` 才是 modder 真能碰到、又真调不到的那种死成员。
**工具的结论强度必须按可见性分级**：
`public`/`protected` 成员的 0 引用 = 高价值发现；
`private` 成员的 0 引用 = 低价值（最多报告「编译器会报 CS0414 / 可删」）；
`private const` 的 0 引用 = 接近无价值。
把三个样本平铺在同一张表里而不标可见性，就会像现在这样让人误以为 6 条等重。

### B-10 同一逻辑跑两次不构成复核（handoff §4 规则 5，本线自我适用）

本文件的每个数字都用**两种独立工具**（ripgrep 与 git-bash `grep -rnw`）各跑一遍，
两者在 6 个样本上一致（8/8、1/1、2/2、1/1、6/6、5/5）。
但这只交叉验证了「工具 A 和工具 B 都没坏」，**不构成对 handoff 数字的独立复核**——
真正的独立复核来自本线的探针链路与 worker-3 的 `_deadmember.mjs` 完全不同：
本线只用 `rg -w` / `grep -rnw` / `find` / `read` 肉眼核，
**没有写、没有运行任何一行 worker-3 的代码**。
反过来，worker-3 也**不应该**用本文件的数字去校准自己的实现——
那样两条线就合并成一条了，等于没复核。正确用法是：
两份结果并列，把 `MISMATCH` 的三条当成工具必须补的用例。

### B-11 「58」这种复现不出来的数字必须原样保留，不要四舍五入成一个好看的解释

样本 5 的「58」我用 9 种口径 + 6 棵树都复现不出。
工具遇到这种情况的正确行为是**报「不可复现」并附上试过的全部口径**，
而不是猜一个最像的口径然后给一个自信的数字。
本文件保留「58 无法复现」这个事实，就是给工具的示范：
**不可复现是一个合法结论，伪造一个可复现的数字不是。**