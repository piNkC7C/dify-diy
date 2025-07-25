const translation = {
  knowledge: '지식',
  documentCount: ' 문서',
  wordCount: ' k 단어',
  appCount: ' 연결된 앱',
  createDataset: '지식 생성',
  createDatasetIntro: '자체 텍스트 데이터를 가져오거나 LLM 컨텍스트를 강화하기 위해 웹훅을 통해 실시간 데이터를 기록할 수 있습니다.',
  deleteDatasetConfirmTitle: '이 지식을 삭제하시겠습니까?',
  deleteDatasetConfirmContent: '지식을 삭제하면 다시 되돌릴 수 없습니다. 사용자는 더 이상 귀하의 지식에 액세스할 수 없으며 모든 프롬프트 설정과 로그가 영구적으로 삭제됩니다.',
  datasetUsedByApp: '이 지식은 일부 앱에서 사용 중입니다. 앱에서 더 이상 이 지식을 사용할 수 없게 되며, 모든 프롬프트 구성 및 로그가 영구적으로 삭제됩니다.',
  datasetDeleted: '지식이 삭제되었습니다',
  datasetDeleteFailed: '지식 삭제에 실패했습니다',
  didYouKnow: '알고 계셨나요?',
  intro1: '지식을 Dify 애플리케이션에 ',
  intro2: '컨텍스트로',
  intro3: ' 통합할 수 있습니다.',
  intro4: '혹은, ',
  intro5: '이처럼',
  intro6: ' 독립적인 ChatGPT 인덱스 플러그인으로 공개할 수 있습니다',
  unavailable: '사용 불가',
  unavailableTip: '임베딩 모델을 사용할 수 없습니다. 기본 임베딩 모델을 설정해야 합니다.',
  datasets: '지식',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: '벡터 검색',
      description: '쿼리의 임베딩을 생성하고, 해당 벡터 표현에 가장 유사한 텍스트 청크를 검색합니다.',
    },
    full_text_search: {
      title: '전체 텍스트 검색',
      description: '문서 내 모든 용어를 인덱싱하여 사용자가 원하는 용어를 검색하고 관련 텍스트 청크를 가져올 수 있게 합니다.',
    },
    hybrid_search: {
      title: '하이브리드 검색',
      description: '전체 텍스트 검색과 벡터 검색을 동시에 실행하고 사용자 쿼리에 가장 적합한 매치를 선택하기 위해 다시 랭크를 매깁니다. 재랭크 모델 API 설정이 필요합니다.',
      recommend: '추천',
    },
    invertedIndex: {
      title: '역 인덱스',
      description: '효율적인 검색에 사용되는 구조입니다. 각 용어는 문서나 웹 페이지에 포함된 것을 가리키며, 용어마다 체계적으로 정리되어 있습니다.',
    },
    change: '변경',
    changeRetrievalMethod: '검색 방법 변경',
  },
  docsFailedNotice: '문서 인덱스에 실패했습니다',
  retry: '재시도',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: '이코노미',
  },
  indexingMethod: {
    semantic_search: '벡터',
    full_text_search: '전체 텍스트',
    hybrid_search: '하이브리드',
    invertedIndex: '역인덱스',
  },
  mixtureHighQualityAndEconomicTip: '고품질과 경제적 지식 베이스의 혼합을 위해서는 재순위 모델이 필요합니다.',
  inconsistentEmbeddingModelTip: '선택된 지식 베이스의 임베딩 모델이 일관되지 않은 경우 재순위 모델이 필요합니다.',
  retrievalSettings: '검색 설정',
  rerankSettings: '재순위 설정',
  weightedScore: {
    title: '가중 점수',
    description: '할당된 가중치를 조정함으로써, 이 재순위 전략은 의미론적 일치 또는 키워드 일치 중 어느 것을 우선시할지 결정합니다.',
    semanticFirst: '의미론 우선',
    keywordFirst: '키워드 우선',
    customized: '사용자 정의',
    semantic: '의미론적',
    keyword: '키워드',
  },
  nTo1RetrievalLegacy: 'N-대 -1 검색은 9 월부터 공식적으로 더 이상 사용되지 않습니다. 더 나은 결과를 얻으려면 최신 다중 경로 검색을 사용하는 것이 좋습니다.',
  nTo1RetrievalLegacyLink: '자세히 알아보기',
  nTo1RetrievalLegacyLinkText: 'N-대 -1 검색은 9 월에 공식적으로 더 이상 사용되지 않습니다.',
  defaultRetrievalTip: '다중 경로 검색이 기본적으로 사용됩니다. 지식은 여러 기술 자료에서 검색된 다음 순위가 다시 매겨집니다.',
  editExternalAPIConfirmWarningContent: {
    front: '이 외부 지식 API 는 다음에 연결됩니다.',
    end: '외부 지식, 그리고 이 수정 사항은 그들 모두에게 적용될 것입니다. 이 변경 사항을 저장하시겠습니까?',
  },
  editExternalAPIFormWarning: {
    end: '외부 지식',
    front: '이 외부 API 는 다음에 연결됩니다.',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      front: '삭제하다',
      end: '?',
    },
    content: {
      front: '이 외부 지식 API 는 다음에 연결됩니다.',
      end: '외부 지식. 이 API 를 삭제하면 모두 무효화됩니다. 이 API 를 삭제하시겠습니까?',
    },
    noConnectionContent: '이 API 를 삭제하시겠습니까?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: '외부 지식 API 선택',
  },
  connectDatasetIntro: {
    content: {
      link: '외부 API 를 만드는 방법 알아보기',
      end: '. 그런 다음 해당 기술 ID 를 찾아 왼쪽 양식에 입력합니다. 모든 정보가 올바르면 연결 단추를 클릭한 후 기술 자료의 검색 테스트로 자동으로 이동합니다.',
      front: '외부 기술 자료에 연결하려면 먼저 외부 API 를 만들어야 합니다. 주의 깊게 읽고 참조하십시오.',
    },
    learnMore: '더 알아보세요',
    title: '외부 기술 자료에 연결하는 방법',
  },
  connectHelper: {
    helper1: 'API 및 기술 자료 ID 를 통해 외부 기술 자료에 연결합니다. 현재,',
    helper4: '도움말 문서 읽기',
    helper2: '검색 기능만 지원됩니다',
    helper5: '이 기능을 사용하기 전에 주의하십시오.',
    helper3: '. 다음을 강력히 권장합니다.',
  },
  externalKnowledgeForm: {
    cancel: '취소',
    connect: '연결하다',
  },
  externalAPIForm: {
    encrypted: {
      end: '기술.',
      front: 'API 토큰은 다음을 사용하여 암호화되고 저장됩니다.',
    },
    save: '구해내다',
    name: '이름',
    endpoint: 'API 엔드포인트',
    edit: '편집하다',
    cancel: '취소',
    apiKey: 'API 키',
  },
  editExternalAPITooltipTitle: '연결된 지식',
  externalAPIPanelTitle: '외부 지식 API',
  externalKnowledgeDescription: '지식 설명',
  externalAPI: '외부 API',
  externalKnowledgeName: '외부 지식 이름',
  createExternalAPI: '외부 지식 API 추가',
  externalTag: '외부',
  editExternalAPIFormTitle: '외부 지식 API 편집',
  externalKnowledgeNamePlaceholder: '기술 자료의 이름을 입력하십시오.',
  externalAPIPanelDocumentation: '외부 지식 API 를 만드는 방법 알아보기',
  createNewExternalAPI: '새 외부 지식 API 만들기',
  mixtureInternalAndExternalTip: '리랭크 모델은 내부 및 외부 지식의 혼합에 필요합니다.',
  connectDataset: '외부 기술 자료에 연결',
  learnHowToWriteGoodKnowledgeDescription: '적절한 지식 설명을 작성하는 방법 알아보기',
  externalKnowledgeDescriptionPlaceholder: '이 기술 자료의 내용 설명 (선택 사항)',
  externalKnowledgeId: '외부 지식 ID',
  externalKnowledgeIdPlaceholder: '지식 ID 를 입력하십시오.',
  allExternalTip: '외부 지식만 사용하는 경우 사용자는 리랭크 모델을 사용할지 여부를 선택할 수 있습니다. 활성화하지 않으면 검색된 청크가 점수에 따라 정렬됩니다. 서로 다른 기술 자료의 검색 전략이 일관되지 않으면 부정확합니다.',
  externalAPIPanelDescription: '외부 지식 API 는 Dify 외부의 기술 자료에 연결하고 해당 기술 자료에서 지식을 검색하는 데 사용됩니다.',
  noExternalKnowledge: '아직 외부 지식 API 가 없으므로 여기를 클릭하여 생성하십시오.',
  chunkingMode: {
    parentChild: '부모 - 자식',
    general: '일반',
  },
  parentMode: {
    fullDoc: '전체 문서',
    paragraph: '단락',
  },
  batchAction: {
    delete: '삭제하다',
    enable: '사용',
    cancel: '취소',
    archive: '보관',
    selected: '선택한',
    disable: '비활성화',
  },
  localDocs: '로컬 문서',
  preprocessDocument: '{{숫자}} 문서 전처리',
  enable: '사용',
  documentsDisabled: '{{num}} 문서 사용 안 함 - 30 일 이상 비활성 상태',
  allKnowledge: '모든 지식',
  allKnowledgeDescription: '이 작업 영역의 모든 정보를 표시하려면 선택합니다. 워크스페이스 소유자만 모든 기술 자료를 관리할 수 있습니다.',
  metadata: {
    createMetadata: {
      namePlaceholder: '메타데이터 이름 추가',
      name: '이름',
      type: '유형',
      back: '뒤',
      title: '새 메타데이터',
    },
    checkName: {
      empty: '메타데이터 이름은 비어 있을 수 없습니다.',
      invalid: '메타데이터 이름은 소문자, 숫자 및 밑줄만 포함할 수 있으며 소문자로 시작해야 합니다.',
      tooLong: '메타데이터 이름은 {{max}}자를 초과할 수 없습니다.',
    },
    batchEditMetadata: {
      multipleValue: '다중 값',
      editMetadata: '메타데이터 편집',
      applyToAllSelectDocument: '선택한 모든 문서에 적용',
      editDocumentsNum: '{{num}} 개 문서 편집 중',
      applyToAllSelectDocumentTip: '선택된 모든 문서에 대해 위에서 편집한 모든 메타데이터와 새 메타데이터를 자동으로 생성하십시오. 그렇지 않으면 메타데이터 편집은 해당 문서에만 적용됩니다.',
    },
    selectMetadata: {
      manageAction: '관리하다',
      newAction: '새 메타데이터',
      search: '메타데이터 검색',
    },
    datasetMetadata: {
      name: '이름',
      deleteTitle: '삭제 확인',
      disabled: '사용안함',
      addMetaData: '메타데이터 추가',
      values: '{{num}} 값들',
      namePlaceholder: '메타데이터 이름',
      rename: '이름 변경',
      builtInDescription: '내장 메타데이터는 자동으로 추출되고 생성됩니다. 사용하기 전에 활성화해야 하며 편집할 수 없습니다.',
      deleteContent: '정말 \'{{name}}\' 메타데이터를 삭제하시겠습니까?',
      description: '이 지식에서 모든 메타데이터를 관리할 수 있습니다. 수정 사항은 모든 문서에 동기화됩니다.',
      builtIn: '내장형',
    },
    documentMetadata: {
      technicalParameters: '기술 매개변수',
      startLabeling: '레이블링 시작',
      metadataToolTip: '메타데이터는 정보 검색의 정확성과 관련성을 향상시키는 중요한 필터 역할을 합니다. 이 문서에 대한 메타데이터를 여기에서 수정하고 추가할 수 있습니다.',
      documentInformation: '문서 정보',
    },
    addMetadata: '메타데이터 추가',
    metadata: '메타데이터',
    chooseTime: '시간을 선택하세요...',
  },
  embeddingModelNotAvailable: '임베딩 모델을 사용할 수 없습니다.',
}

export default translation
