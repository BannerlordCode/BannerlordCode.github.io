# 旧三树（v1.3.0 / v1.3.15 / v1.4.5）生成内容判定 · 交接

> **状态：710 页待人工判定。** lead-4 完成抽样后被关闭，此文档是它的结论 + Boss 的独立复算，供接续者使用。
> **不要因为「抽样 0/20」就认为判定闭合——见 §4，那正是 Boss 自己犯过的错。**

## 1. 已确立的事实（可复现）

```
旧三树 .cs 源：1.3.0 = 4,572 / 1.3.15 = 5,194 / 1.4.5 = 8,574
1.4.5 C# 源码位置：C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\<Assembly>\<Assembly>\<Type>.cs
   （双层嵌套。只扫一层会得出「没有 .cs」的错误结论——本会话已发生过一次。）
全站 orphan（可复现，`node tools/_v146_orphan_check.mjs`）：
   total 39,015 页 · orphans 4,562 · v1.4.5 占 4,506 · v1.4.6 13 · v1.5.3 12
   旧三树撤回的成功指标 = v1.4.5 的 4,506 → 0
```

## 2. 散文区 = **189 页**（不是 146，也不是 0）

```
architecture 59   guide 55   native 27   native-1.3.15-src 39   xml-reference 9
```
清单由 lead-4 枚举并存于 `C:\WorkSpace\Bannerlord\_prose_areas.json`。
**教训两次**：lead-4 的正则 `/native-[\w-]*-src/` 匹配不到 `native-1.3.15-src`（**点不在 `\w` 里**）→ 漏 39 页；Boss 的归类只扫顶层桶名 → 得 0。**含点/连字符的目录名是最容易漏的。**

## 3. 已判定的两桶

```
KEEP     1,211   classifyPage == deep_pass（真正门禁，非结构代理）
       +   189   散文区
       = 1,400
WITHDRAW 36,731  命中模板句或结构巨型（>150 链接 / >20 KB 且 >50% 列表行）
```

## 4. ⚠️ 「已归类」这个桶不能用结构判定

Boss 曾用「有 `**Type:**` 且有 `## 心智模型`」当「已归类」，量出 **37,109 页**。
用真正的 `classifyPage` 跑同一批页：**deep_pass 只有 1,211**。**差 30,000 页**——因为**生成 stub 同时具备这两样**。

> **「长得像深写页」不等于「是深写页」。** 这是本会话第 11 类事故的新形态：拿结构特征当真值检查。

## 5. 🔴 未闭合：710 页

对「模糊桶」（排除散文区 + 排除上述粗判据桶）跑**真正的** `classifyPage`：

```
模糊桶 1,525 页
  deep_pass     0   ← 一页都没有
  stub        361
  noise       454
  other       710   ← classifyPage 返回非预期状态，必须人工读
```

**`other` 那 710 页是全站最后一批没有判据的页。**

### 为什么抽样不能替代逐页读
lead-4 在它自己的 18,023 页抽样池里得到 **手写 0/20**，方向正确。
但**它的抽样池不含这 710 页**，而 Boss 自己的抽样（4 个「手写」样本）**全部落在已归类桶里、没有一页来自真正的模糊池**——它据此得出「0/20，所以 AMBIGUOUS=0」，**这一步是无效外推**。

> **「A 池抽样 0%」不能推「B 池也是 0%」。** Boss 亲自犯过：按体积分层抽样，而分层没有排除已归类桶，于是四个样本全部系统性地偏向了同一类。

### 已知这批里混有手写页（实证）
Boss 从模糊桶抽 8 页，**至少 3 页明显手写**：
```
v1.3.15/en/api/campaign-ext/CampaignTickCacheDataStore.md  (17,758 B)
  description: "The Campaign-private per-frame MobileParty movement cache: initialized,
   consumed, invalidated, and rebuilt by the campaign runtime; mods must not create,
   query, or write it directly."      ← 具体的判断，机器写不出
v1.3.15/en/api/campaign-ext/PartyMoraleModel.md  (6,009 B)
  description: "The replaceable policy for base, battle, starvation, and unpaid-wage
   morale, returning explanations without directly changing party morale."
v1.3.15/en/architecture/sdk-overview.md  (6,739 B)  ← 真实 roadmap
```
同批另 5 页明显生成（`AddCompanionAction` / `StartBattleAction` / `MakePregnantAction` 自述 "Auto-generated"；两个 `_index.md` 整段照抄「同一命名空间下的类负责相近功能…」）。

**结论：模糊桶是混合的，约 3/8 手写。整桶移出会误删。**

## 6. 接续者的第一步

1. 跑真正的 `classifyPage` 取出 `other` 那 710 页（命令见 §5 的脚本路径）
2. **读 10 页**，给原文与判定
3. 手写 > 0 → 这 710 页必须拆成两类，**不能整桶移出**
4. 判定闭合后：先手写索引页 → 再撤回 → 验证 `v1.4.5 orphan 4,506 → 0`

## 7. 判定判据（唯一被验证有效的）

> **问的不是「这段文字像不像机器写的」，而是「这段内容是否包含机器做不出来的具体判断」。**

机器做不出来 → 手写：
- 具体实现的枚举：「Bagh-Chal、Konane、Mu-Torere、Puluc、Seega、Tablut 六种具体棋」
- 技术判断与理由：「跨引用的对象需要稳定的整数 id，字符串要去重，容器与普通对象要走不同路径」
- 场景与陷阱：「可以是玩家家族、某个领主家族，也可以是土匪、叛军之类的小型派系」

机器能写出来 → 生成：
- 概述与心智模型是同一句模板换了个类型名
- 「主要属性」是签名表，无一句说明为什么
- 通篇没有一个只有作者知道的具体事实

**体积不是判据**：1.5 KB 的 `AgeModel.md` 句句公式化；11.8 KB 的 `Clan.md` 满是具体判断。

## 8. 两个 agent 在同一会话里犯了同一个错（这是本规则最有力的论据）

- Boss 拿 `description` 的「自动生成类参考」当**铁证**——而真实手写页（`ISaveContext.md`）用同一句式。**把模板当指纹。**
- lead-4 跑出「36,617 页（94.8%）在 description 里自报自动生成」，准备当**决定性标记**——**同一个错，独立犯下。**

两者都已作废。**「模板」与「指纹」的差别**：模板是所有页共用的句式，手写页也会用；指纹必须是这一页独有的生成痕迹。**搜模板之前，先问「有没有别的页也在用它」。**
